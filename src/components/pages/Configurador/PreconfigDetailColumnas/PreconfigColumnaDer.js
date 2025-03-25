import React, { useContext, useEffect, useState } from 'react'
import "./ConfiguradorColumnasStyle.css";
import { ListadoContext } from '../ContextConfigurador/ListadoContext';
import { PreconfiguradoContext } from '../ContextConfigurador/PreconfiguradoContext';
import Price from '../Price';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';

export function PreconfigColumnaDer({ minWidth }) {
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";
	const { param } = useParams();
	const { listado, typeDetalle } = useContext(ListadoContext);
	const { counterRam, counterDisco } = useContext(PreconfiguradoContext);
	const { componentes, busqueda, setBusqueda, searchInput, paso, infoDidMount, setComponentes, preconfigurados, loading, setLoading } = useContext(MarcaProcesadorContext);
	const [data, setData] = useState(componentes);
	const [sincePrice, setSincePrice] = useState(0);
	const [toPrice, setToPrice] = useState(100000);

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

	console.log(componentes)

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
				console.log(data)

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
	// console.log(filteredProducts.length)
	/*

	useEffect(() => {
		const filterMother = (catItem) => { // Filtrado por Tag
			const result = filteredProducts.filter((value) => {
				return value.Tag?.[0].toLowerCase() === catItem
			});
			// //console.log(result);
			setComponentes(result)
		}

		if (paso === "motherboard") {
			if (carrito.length > 0) {
				// //console.log(filteredProducts.filter(value => value.Tag?.[0].toLowerCase() === carrito[0].Marca.toLowerCase()))
				filterMother(carrito[0].Marca.toLowerCase())
			}
		}

		if (paso === "ram") { // Ver con qué propiedadsetBusqueda de ram aplicaryzenr el filtro con el mother.
			if (carrito[1].Slots) {// Dejo comentada la validación del si el item agregado el carrito viene con slots o no
				// console.log(carrito[1].Slots)
				//Swal.fire('El mother seleccionado tiene 2 slots.')
				console.log("El mother seleccionado tiene 2 slots.")

			} else {
				console.log("El motherboard que seleccionaste no tiene la propiedad slots.")
			}
		}

	}, [componentes[0]]) // Solucion temporal a los console infinitos. */

	//--------------------------------------- Array de objetos agregados CARRITO para validar el próximo componente.-------------------

	let carrito = []
	aComponentesAgregados.forEach(element => {
		element.forEach(item => {
			carrito.push(item);
		})
	});

	// console.log(carrito);


	//----------------------------------------------------------------------------------------------------------------------

	return (
		<>
			<section className="armaTuPc mt-5 mr-2" id="armarTuPc__columnaDer">
				<div className="m-3 pl-3">
					<h6 className='confEleg'>Configuracion elegida</h6>
					<ul className="pl-0 border-bottom mt-3" id="listado-compra">
						{listadoAgregados.length > 0 && listadoAgregados.map((elemento) => (
							<li key={"preconfig_" + elemento.Alias}
								id={`compra_${elemento.Alias}`}
								style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p className="acomodoAltura">
									{elemento.Tipo === 'ram' && <>{counterRam} x</>}
									{elemento.Tipo === 'disco' && <>{counterDisco} x</>}  {elemento.Descripcion}
								</p>
								<p className='preciosDerecha'>
									{elemento.Moneda}
									{`$${(new Intl.NumberFormat().format(elemento.Precio))},00`}
								</p>
							</li>
						))}
						{/* <li id='compra_armado'
							style={{display: 'flex', justifyContent: 'space-between'}}>
							
							{listado.fuente.length > 0 
								? 
								<>
									<p className="acomodoAltura">
										ARMADO
									</p>
									<p className='preciosDerecha' >
										$2500,00
									</p>
								</>
								: 
								''
							}
							
						</li> */}
					</ul>
					<Price />
					<hr />

					<div className={`d-grid gap-2 mt-2 `}>
						<span className="d-inline-block tooltip-compra d-grid gap-2 mt-2" tabIndex="0" data-bs-placement="bottom" data-bs-toggle="tooltip"
							title="Se debe seleccionar mínimo: procesador, mother, ram, disco, fuente y gabinete">
							<Link to={`/Order/${param}`} type="button"
								className={`btn btn-outline-primary ${!listado.armado.length > 0 && 'disabledCategory'}`}
								id="comprar">
								Finalizar Pedido
							</Link>
						</span>
					</div>
				</div>
				<div className="foto-publicidad">
					<img className='img__columna3' alt="" src={'https://coregaming.com.mx/assets/uploads/sw_coregaming_asus_aio_838x470.jpg?1644440295'} />
					{minWidth &&
						<img className='img__columna3' alt="" src={`${imagenCategoria}/banners/banner_chico_intel.jpg`} />
					}
				</div>

			</section>
		</>
	)
};
