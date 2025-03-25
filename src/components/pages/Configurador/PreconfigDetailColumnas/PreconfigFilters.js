import React, { useContext, useEffect, useState } from 'react'
import "./ConfiguradorColumnasStyle.css";
import { ListadoContext } from '../ContextConfigurador/ListadoContext';
import { PreconfiguradoContext } from '../ContextConfigurador/PreconfiguradoContext';
import { useParams } from 'react-router-dom';
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';
import { Form } from 'react-bootstrap';

export function PreconfigFilters({ minWidth }) {
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";
	const { param } = useParams();
	const { listado, typeDetalle } = useContext(ListadoContext);
	const { counterRam, counterDisco } = useContext(PreconfiguradoContext);
	const { componentes, busqueda, setBusqueda, searchInput, paso, infoDidMount, setComponentes, preconfigurados, loading, setLoading, datos, setDatos } = useContext(MarcaProcesadorContext);
	//const [data, setData] = useState(componentes);
	const [sincePrice, setSincePrice] = useState(0);
	const [toPrice, setToPrice] = useState(100000);
	const [checkedIntel, setCheckedIntel] = useState(<input type="checkbox" />)
	const [checkedAmd, setCheckedAmd] = useState(<input type="checkbox" />)
	const [checkedAll, setCheckedAll] = useState(<input type="checkbox" />)
	const [checked2, setChecked2] = useState(<input type="checkbox" />)
	const [checked4, setChecked4] = useState(<input type="checkbox" />)
	const [checkedAllSLots, setCheckedAllSlots] = useState(<input type="checkbox" />)
	const [checked8gb, setChecked8gb] = useState(<input type="checkbox" />)
	const [checked16gb, setChecked16gb] = useState(<input type="checkbox" />)
	const [checkedAllGb, setCheckedAllGb] = useState(<input type="checkbox" />)
	const [checkedSata, setCheckedSata] = useState(<input type="checkbox" />)
	const [checkedM2, setCheckedM2] = useState(<input type="checkbox" />)
	const [checkedAllDisco, setCheckedAllDisco] = useState(<input type="checkbox" />)
	const [dosSlots, setDosSlots] = useState(datos.filter((dato) => {
		return dato.Slots === 2
	}))
	const [cuatroSlots, setCuatroSlots] = useState(datos.filter((dato) => {
		return dato.Slots === 4
	}))
	const [allMothers, setAllMothers] = useState(datos.filter((dato) => {
		return dato.Slots === 2 || dato.Slots === 4
	}))

	let aComponentesAgregados = [];
	typeDetalle.forEach(element => {
		if (listado[element].length !== 0) {
			aComponentesAgregados.push(listado[element]);
		}
	});
	let listadoAgregados = []
	aComponentesAgregados.forEach(element => {
		element.forEach(item => {
			listadoAgregados.push(item);
		})
	});

	//-----------------------------Integración mercadopago-------------------------------------

	const llamadaMercadoPago = () => {

		const itemsMP = listadoAgregados.map((prod) => { // Mapeo los productos agregados para pasarle la compra a mercadopago en el body.
			return {
				title: prod.Alias,
				description: prod.Descripcion,
				picture_url: "",
				category_id: "",
				quantity: 1,
				currency_id: "ARS",
				unit_price: parseFloat(prod.Precio)
			}
		})

		fetch('https://api.mercadopago.com/checkout/preferences', { // endpoint de preferencia
			method: 'POST', // El llamado va siempre con método POST.
			headers: {
				Authorization: "Bearer APP_USR-3394229274016293-122612-d8a8322285d8b80745effdb6717fbcbd-1273130387" // Access token vendedor. 
			},
			body: JSON.stringify({ // Siempre se debe parsear a json
				items: itemsMP,
				back_urls: {
					success: "http://localhost:3000/exito", // Redirecciono.
					failure: window.location.href // Redirecciono.
				}
			})
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data)

				window.location.replace(data.init_point) // init point es el enlace del checkout.
			})
	}
	//--------------------------------------Lógica de filtrado de productos ----------------------------------------------------

	const filteredProducts = componentes.filter(product =>
		product.Descripcion.toLowerCase().includes(searchInput)
	)

	// console.log(paso);
	// console.log(filteredProducts);

	// ----------------------------------------------Condiciono el paso 2 - Selección de motherboard---------------------------------------
	const filterResult = (catItem) => { // Filtrado por ahora por Marca.
		setLoading(true)
		const result = datos.filter((value) => {
			return paso === "microprocesador" ? value.Marca.toLowerCase() === catItem : paso === "motherboard" ? value.Slots === catItem ||
				value.Tag?.toLowerCase() === catItem : paso === "motherboard" && carrito.length > 0 ? carrito[0].Tags.toLowerCase() === value.Tag?.toLowerCase() :
				paso === "ram" ? value.Descripcion.toLowerCase().includes(catItem) : paso === "disco" ? value.Descripcion.toLowerCase().includes(catItem) : null
		});

		setComponentes(result)
		console.log(result)

		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	// Filtrado de slots

	const filterSlot = (catItem) => {
		setLoading(true)
		const result = datos.filter((value) => {
			if (paso === "motherboard" && carrito.length > 0) {
				return value.Slots === catItem && value.Tag?.toLowerCase() === carrito[0].Tags?.toLowerCase()
			}
		})
		console.log(result)

		setComponentes(result)

		setTimeout(() => {
			setLoading(false)
		}, 1000);
	}

	const clearSlots = () => { // Para mostrar nuevamente todos los productos.
		setLoading(true)
		const result = datos.filter((dato) => {
			if (paso === "motherboard" && carrito.length > 0) {
				return dato.Tag?.toLowerCase() === carrito[0].Tags?.toLowerCase()
			}
		})
		setComponentes(result)

		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	// Si estamos en paso motherboard filtro por defecto en base a la seleccion del paso anterior (carrito)
	useEffect(() => {
		if (paso === "motherboard") {
			if (carrito.length > 0) {
				setDosSlots(datos.filter((dato) => {
					return dato.Slots === 2 ? dato.Slots === 2 && dato.Tag?.toLowerCase() === carrito[0].Marca.toLowerCase() :
						dato.Slots === 4 ? dato.Slots === 2 && dato.Tag?.toLowerCase() === carrito[0].Marca.toLowerCase() : null
				}))
				setCuatroSlots(datos.filter((dato) => {
					return dato.Slots === 4 && dato.Tag?.toLowerCase() === carrito[0].Marca.toLowerCase()
				}))
				setAllMothers(datos.filter((dato) => {
					return dato.Slots === 4 || dato.Slot === 2 && dato.Tag?.toLowerCase() === carrito[0].Marca.toLowerCase()
				}))

				filterResult(carrito[0].Tags?.toLowerCase())
			}
		}
	}, [datos]);


	const clear = () => { // Para mostrar nuevamente todos los productos.
		setLoading(true)
		setComponentes(datos)

		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}

	const filterPrice = (since, to) => { // Filtrado por ahora por Marca.
		const result = datos.filter((value) => {
			return value.Precio >= since && value.Precio <= to
		});
		// console.log(result)
		setComponentes(result)
	}

	// Filtrado por precios de producto

	const handleOnSubmit = (e) => {
		setLoading(true)
		e.preventDefault()
		console.log('Submit OK')
		filterPrice(sincePrice, toPrice)

		setTimeout(() => {
			setLoading(false)
		}, 1000)

	}

	const handleSincePrice = (e) => {
		setSincePrice(parseInt(e.target.value))
		// console.log(sincePrice)
	}

	const handleToPrice = (e) => {
		setToPrice(parseInt(e.target.value))
		// console.log(toPrice)
	}
	//--------------------------------------- Array de objetos agregados CARRITO para validar el próximo componente.-------------------

	// Declaro las variables para obtener los length de los productos

	const intel = datos.filter((dato) => {
		return dato.Marca === "intel"
	})

	const amd = datos.filter((dato) => {
		return dato.Marca.toLowerCase() === "amd"
	})

	const ochoGigabytes = datos.filter((dato) => {
		return dato.Descripcion.toLowerCase().includes("8gb")
	})
	const dieciseisGigabytes = datos.filter((dato) => {
		return dato.Descripcion.toLowerCase().includes("16gb")
	})

	const m2 = datos.filter((dato) => {
		return dato.Descripcion.toLowerCase().includes("m.2")
	})
	const sata = datos.filter((dato) => {
		return dato.Descripcion.toLowerCase().includes("sata")
	})



	//---------------------------------------------------------------------------------------------------------------------------------

	let carrito = []
	aComponentesAgregados.forEach(element => {
		element.forEach(item => {
			carrito.push(item);
		})
	});

	console.log(carrito);

	//----------------------------------------------------------------------------------------------------------------------

	return (
		<>
			<section className="armaTuPc mt-5 mr-md-2" id="armarTuPc__columnaDer" >
				<div className="m-3 pl-3">


					{paso === 'microprocesador' ? <div className='contenedor-tags'>
						<h6 className='confEleg'>{paso.toUpperCase()} </h6>
						<hr />
						<br />
						<div className='links-cont-filter'>
							<b><h4>Marca</h4></b>
							<br />
							<div className='check-contain' onClick={() => {
								const intel = setCheckedIntel(<input type="checkbox" checked />)
								const amd = setCheckedAmd(<input type="checkbox" />)
								const all = setCheckedAll(<input type="checkbox" />)
								const filter = filterResult('intel')
								intel()
								amd()
								all()
								filter()
							}}>
								<a>
									<b><p>Intel ({intel.length})</p></b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const intel = setCheckedIntel(<input type="checkbox" />)
								const amd = setCheckedAmd(<input type="checkbox" checked />)
								const all = setCheckedAll(<input type="checkbox" />)
								const filter = filterResult('amd')
								intel()
								amd()
								all()
								filter()
							}}>
								<a onClick={() => filterResult('amd')}>
									<b>
										<p>
											AMD({amd.length})
										</p>
									</b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const intel = setCheckedIntel(<input type="checkbox" checked />)
								const amd = setCheckedAmd(<input type="checkbox" checked />)
								const all = setCheckedAll(<input type="checkbox" checked />)
								const cle = clear()
								intel()
								amd()
								all()
								cle()
							}}>

								<a>
									<b>
										<p>Todos</p>
									</b>
								</a>
							</div>
						</div>
						<br />
						<div className='filter-price-cont'>
							<h4>Precio</h4>
							<br />
							<Form onSubmit={handleOnSubmit}>
								<input type="number" value={sincePrice} onChange={handleSincePrice} placeholder="Mínimo..." className="input-filter-price" />
								<input type="number" value={toPrice} onChange={handleToPrice} placeholder="Máximo..." className="input-filter-price" />
								<a onClick={handleOnSubmit}>

									<i className="fa-sharp fa-solid fa-arrow-right"></i>
								</a>
							</Form>
						</div>
					</div> : ''}
					{paso === 'motherboard' ? <div className='contenedor-tags'>
						<h6 className='confEleg'>{paso.toUpperCase()} </h6>
						<hr />
						<br />
						<div className='links-cont-filter'>
							<h4>Slots</h4>
							<br />
							<div className='check-contain' onClick={() => {
								const two = setChecked2(<input type="checkbox" checked />)
								const four = setChecked4(<input type="checkbox" />)
								const all = setCheckedAllSlots(<input type="checkbox" />)
								const filter = filterSlot(2)
								two()
								four()
								all()
								filter()
							}}>
								<a>
									<b><p>2({dosSlots.length}) </p></b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const two = setChecked2(<input type="checkbox" />)
								const four = setChecked4(<input type="checkbox" checked />)
								const all = setCheckedAllSlots(<input type="checkbox" />)
								const filter = filterSlot(4)
								two()
								four()
								all()
								filter()
							}}>
								<a>
									<b>
										<p>
											4({cuatroSlots.length})
										</p>
									</b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const two = setChecked2(<input type="checkbox" checked />)
								const four = setChecked4(<input type="checkbox" checked />)
								const all = setCheckedAllSlots(<input type="checkbox" checked />)
								const filter = clearSlots();
								two()
								four()
								all()
								filter();
							}}>
								<a>
									<b><p>Todos</p></b>
								</a>
							</div>
						</div>
						<br />
						<div className='filter-price-cont'>
							<h4>Precio</h4>
							<br />
							<Form onSubmit={handleOnSubmit}>
								<input type="number" value={sincePrice} onChange={handleSincePrice} placeholder="Mínimo..." className="input-filter-price" />
								<input type="number" value={toPrice} onChange={handleToPrice} placeholder="Máximo..." className="input-filter-price" />
								<a onClick={handleOnSubmit}>

									<i className="fa-sharp fa-solid fa-arrow-right"></i>
								</a>
							</Form>
						</div>
					</div> : ''}
					{paso === 'ram' ? <div className='contenedor-tags'>
						<h6 className='confEleg'>{paso.toUpperCase()} </h6>

						<hr />
						<br />

						<div className='links-cont-filter' >
							<h4>GB</h4>
							<br />
							<div className='check-contain' onClick={() => {
								const GB8 = setChecked8gb(<input type="checkbox" checked />)
								const GB16 = setChecked16gb(<input type="checkbox" />)
								const allGB = setCheckedAllGb(<input type="checkbox" />)
								const filter = filterResult("8gb")
								GB8()
								GB16()
								allGB()
								filter()
							}}>
								<a>
									<b><p>8GB({ochoGigabytes.length}) </p></b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const GB8 = setChecked8gb(<input type="checkbox" />)
								const GB16 = setChecked16gb(<input type="checkbox" checked />)
								const allGB = setCheckedAllGb(<input type="checkbox" />)
								const filter = filterResult("16gb")
								GB8()
								GB16()
								allGB()
								filter()
							}}>
								<a>
									<b>
										<p>
											16GB({dieciseisGigabytes.length})
										</p>
									</b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const GB8 = setChecked8gb(<input type="checkbox" checked />)
								const GB16 = setChecked16gb(<input type="checkbox" checked />)
								const allGB = setCheckedAllGb(<input type="checkbox" checked />)
								const allProducts = clear()
								GB8()
								GB16()
								allGB()
								allProducts()
							}}>
								<a>
									<b>
										<p >Todos</p>
									</b>
								</a>
							</div>
						</div>
						<br />
						<div className='filter-price-cont'>
							<h4>Precio</h4>
							<br />
							<Form onSubmit={handleOnSubmit}>
								<input type="number" value={sincePrice} onChange={handleSincePrice} placeholder="Mínimo..." className="input-filter-price" />
								<input type="number" value={toPrice} onChange={handleToPrice} placeholder="Máximo..." className="input-filter-price" />
								<a onClick={handleOnSubmit}>

									<i className="fa-sharp fa-solid fa-arrow-right"></i>
								</a>
							</Form>
						</div>
					</div> : ''}
					{paso === 'disco' ? <div className='contenedor-tags'>
						<h6 className='confEleg'>Filtra tu busqueda: </h6>

						<hr />
						<br />
						<div className='links-cont-filter'>
							<h4>Disco</h4>
							<br />
							<div className='check-contain' onClick={() => {
								const sata = setCheckedSata(<input type="checkbox" checked />)
								const m2 = setCheckedM2(<input type="checkbox" />)
								const allDisco = setCheckedAllDisco(<input type="checkbox" />)
								const filter = filterResult("sata");
								sata()
								m2()
								allDisco()
								filter()
							}}>
								<a>
									<b>
										<p>SATA ({sata.length}) </p>
									</b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const sata = setCheckedSata(<input type="checkbox" />)
								const m2 = setCheckedM2(<input type="checkbox" checked />)
								const allDisco = setCheckedAllDisco(<input type="checkbox" />)
								const filter = filterResult("m.2");
								sata()
								m2()
								allDisco()
								filter()
							}}>
								<a>
									<b>
										<p>
											M.2 ({m2.length})
										</p>
									</b>
								</a>
							</div>
							<div className='check-contain' onClick={() => {
								const sata = setCheckedSata(<input type="checkbox" checked />)
								const m2 = setCheckedM2(<input type="checkbox" checked />)
								const allDisco = setCheckedAllDisco(<input type="checkbox" checked />)
								const allProducts = clear()
								sata()
								m2()
								allDisco()
								allProducts()
							}}>
								<a>
									<b>
										<p>Todos</p>
									</b>
								</a>
							</div>
						</div>
						<br />
						<div className='filter-price-cont'>
							<h4>Precio</h4>
							<br />
							<Form onSubmit={handleOnSubmit}>
								<input type="number" value={sincePrice} onChange={handleSincePrice} placeholder="Mínimo..." className="input-filter-price" />
								<input type="number" value={toPrice} onChange={handleToPrice} placeholder="Máximo..." className="input-filter-price" />
								<a onClick={handleOnSubmit}>

									<i className="fa-sharp fa-solid fa-arrow-right"></i>
								</a>
							</Form>
						</div>
					</div> : ''}
					{paso === 'gabinete' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Gabinete</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'video' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Placa de video</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'fuente' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Fuente</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'armado' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Servicio de armado</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'cooler' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Cooler</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'licencia' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Licencia</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'monitor' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Monitor</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'teclado' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Teclado</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'mouse' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Mouse</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'auricular' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Auriculares</h5>
							<br />
						</div>
					</div> : ''}
					{paso === 'silla' ? <div className='contenedor-tags'>
						<div className='links-cont-filter'>
							<h5>Silla</h5>
							<br />
						</div>
					</div> : ''}

				</div>
				{!minWidth &&
					<div className="foto-publicidad">
						<img className='img__columna3' alt="" src={`${imagenCategoria}/banners/banner_chico_intel.jpg`} />
					</div>
				}

			</section>
		</>
	)
};
