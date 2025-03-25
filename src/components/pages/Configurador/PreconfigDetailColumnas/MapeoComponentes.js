/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react'
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';
import { ListadoContext } from '../ContextConfigurador/ListadoContext';
import { PreconfiguradoContext } from '../ContextConfigurador/PreconfiguradoContext';
// import { nanoid } from 'nanoid'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './ConfiguradorColumnasStyle.css';
import Spinner from '../../../Spinner/Spinner';
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { GrPowerReset } from "react-icons/gr";
import { type } from '@testing-library/user-event/dist/type';


const MapeoComponentes = () => {
	const { componentes, paso, infoDidMount, busqueda, setBusqueda, searchInput, setComponentes, preconfigurados, loading, setLoading, setPaso } = useContext(MarcaProcesadorContext);
	const { addComponentList, listado, removeComponentList, typeDetalle } = useContext(ListadoContext);
	const [datos, setDatos] = useState([])
	const { sumaPrecios, restaPrecios, counterRam, setCounterRam, counterDisco, setCounterDisco, counterMother, setCounterMother } = useContext(PreconfiguradoContext);

	// Tooltips para probar botones de back y reset
	const renderTooltip = props => (
		<Tooltip {...props}>Quitar producto</Tooltip>
	);
	const toolTipBack = props => (
		<Tooltip {...props}>Anterior</Tooltip>
	);
	const tooltipReset = props => (
		<Tooltip {...props}>Reiniciar configuracion</Tooltip>
	);

	// Resetear configuracion vuelve a armar de cero

	const reset = () => {
		window.location.replace('');
	}

	// ---------------------------------------Lógica de filtrado de productos----------------------------------------------------------

	const filteredProducts = componentes.filter(product =>
		product.Descripcion.toLowerCase().includes(searchInput)
	)

	const handleOnChange = (e) => {
		setBusqueda(e.target.value);
	}

	// Volviendo a los pasos anteriores con posicion de array typeDetalle

	const handleMicroPaso = () => {
		infoDidMount(typeDetalle[0])
	}
	const handleMotherPaso = () => {
		infoDidMount(typeDetalle[1])
	}
	const handleRamPaso = () => {
		infoDidMount(typeDetalle[2])
	}
	const handleDiscoPaso = () => {
		infoDidMount(typeDetalle[3])
	}
	const handleGabinete = () => {
		infoDidMount(typeDetalle[4])
	}
	const handleVideoPaso = () => {
		infoDidMount(typeDetalle[5])
	}
	const handleFuente = () => {
		infoDidMount(typeDetalle[6])
	}
	const handleArmado = () => {
		infoDidMount(typeDetalle[7])
	}

	const handleCoolerPaso = () => {
		infoDidMount(typeDetalle[8])
	}

	const handleLicencia = () => {
		infoDidMount(typeDetalle[9])
	}
	const handleMonitor = () => {
		infoDidMount(typeDetalle[10])
	}

	const handleTeclado = () => {
		infoDidMount(typeDetalle[11])
	}
	const handleMouse = () => {
		infoDidMount(typeDetalle[12])
	}
	const handleAuricular = () => {
		infoDidMount(typeDetalle[13])
	}
	const handleSilla = () => {
		infoDidMount(typeDetalle[14])
	}


	//infoDidMount(typeDetalle[1])
	//---------------------------------------------------------------------------------------------------------------------------------
	const handleClick = (paso, item) => {
		sumaPrecios(item.Precio, listado[paso], item.Alias, counterRam)//PASO ALIAS COMO PARAMETRO
		addComponentList(paso, item)
		console.log(item)


		//PASO AL SIGUIENTE COMPONENTE
		let indexComponenteElegido = typeDetalle.indexOf(item.Tipo)
		let proximoComponente = indexComponenteElegido + 1;
		console.log(componentes)
		console.log(indexComponenteElegido)
		console.log(proximoComponente)

		setBusqueda('')

		if (proximoComponente <= 14 && paso !== 'ram'/* && paso !== 'disco' */) { //DESCOMENTO ESTO --->( && paso !== 'disco') PARA USAR CONTADOR
			infoDidMount(typeDetalle[proximoComponente])

		} else if (proximoComponente <= 13 && paso === 'ram') {
			setCounterRam(1)

		} else if (proximoComponente <= 13 && paso === 'disco') {
			setCounterDisco(1)
		}
	}

	//setDatos(componentes)
	console.log(datos)

	const handleSumarCantidadPrecio = (componente) => { //SUMO CANTIDAD EN RAMS Y DISCOS
		let esDisco = componente.Tipo === 'disco';

		if (!esDisco && counterRam < 4) {
			let precio = listado[paso][0].Precio
			setCounterRam(counterRam + 1)
			sumaPrecios(precio, listado[paso], componente, counterRam)//PASO ARRAY COMPONENTE COMO PARAMETRO


		} else if (esDisco && counterDisco < 4) {
			let precio = listado[paso][0].Precio //PRECIO DE COMPONENTE ELEGIDO
			setCounterDisco(counterDisco + 1)
			sumaPrecios(precio, listado[paso], componente, counterDisco)//PASO ARRAY COMPONENTE COMO PARAMETRO
		}
	}


	const handleRestarCantidadPrecio = (item) => { //RESTAR CANTIDAD EN RAMS Y DISCOS
		let esDisco = item.Tipo === 'disco';

		if (!esDisco && counterRam > 1) {
			setCounterRam(counterRam - 1)
			restaPrecios(item, listado[paso], counterRam)

		} else if (esDisco && counterDisco > 1) {
			setCounterDisco(counterDisco - 1)
			restaPrecios(item, listado[paso], counterDisco)
		}
	}
	const cambiarPaso = (item) => {

		// PASO AL SIGUIENTE COMPONENTE
		let indexComponenteElegido = typeDetalle.indexOf(item.Tipo)
		let proximoComponente = indexComponenteElegido + 1;
		console.log(indexComponenteElegido)
		console.log(proximoComponente)

		proximoComponente <= 13 && infoDidMount(typeDetalle[proximoComponente])
		setBusqueda('')
	}

	const handleRemoveItem = (item) => {
		if (item.Tipo === 'ram') {
			restaPrecios(item, listado[paso][0], counterRam)
		} else if (item.Tipo === 'disco') {
			restaPrecios(item, listado[paso][0], counterDisco)
		} else {
			restaPrecios(item)
		}

		removeComponentList(item)
	}
	let widthMin = window.innerWidth < 768
	return (
		<>
			<div className="group-input-filtered">
				<svg className="icon-filtered" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
				<input value={busqueda} onChange={handleOnChange} placeholder="Buscá por palabra clave..." type="search" className="input-filtered" />
			</div>


			{paso === 'motherboard' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleMicroPaso()} >
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.2em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.2em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>

				: ''
			}

			{paso === 'ram' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleMotherPaso()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>

				: ''
			}
			{paso === 'disco' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleRamPaso()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>


				: ''
			}
			{paso === 'gabinete' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleDiscoPaso()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>

				/* push cambio */
				: ''
			}
			{paso === 'video' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleGabinete()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
				</div>
				: ''
			}
			{paso === 'fuente' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleVideoPaso()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>


				: ''
			}
			{paso === 'armado' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleFuente()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>


				: ''
			}
			{paso === 'cooler' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleArmado()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>


				: ''
			}
			{paso === 'licencia' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleCoolerPaso()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>
				: ''
			}
			{paso === 'monitor' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleLicencia()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>
				: ''
			}
			{paso === 'teclado' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleMonitor()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>
				: ''
			}
			{paso === 'mouse' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} id='resetButtons'>
					<a onClick={() => handleTeclado()} style={{ cursor: 'pointer' }}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>

				: ''
			}
			{paso === 'auricular' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} a id='resetButtons'>
					<a onClick={() => handleMouse()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>


				: ''
			}
			{paso === 'silla' //CAMBIO DE PASO: A MEJORAR	
				?

				<div className='botones__sgte__ant d-flex  m-3' style={{ cursor: 'pointer' }} a id='resetButtons'>
					<a onClick={() => handleAuricular()}>
						<OverlayTrigger placement="left" overlay={toolTipBack}>
							<i>
								<IoMdArrowRoundBack size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>
					<a onClick={() => reset()} >
						<OverlayTrigger placement="right" overlay={tooltipReset}>
							<i>
								<GrPowerReset size='1.5em' cursor='pointer' color='#1e6dff' />
							</i>
						</OverlayTrigger>
					</a>

				</div>


				: ''
			}
			{paso !== 'ram' //CAMBIO DE PASO: A MEJORAR
				? ''
				: listado.ram.length > 0 && !widthMin
					?
					<div className='botones__sgte__ant fade-in d-flex justify-content-end m-3'>
						<button onClick={() => cambiarPaso(listado[paso][0])}>
							SIGUIENTE
							<div className="arrow-wrapper">
								<div className="arrow__right"></div>
							</div>
						</button>
					</div>
					: ''
			}
			{paso !== 'disco' //CAMBIO DE PASO: A MEJORAR
				? ''
				: listado.disco.length > 0
					?
					<div className='botones__sgte__ant fade-in d-flex justify-content-end m-3'>
						<button onClick={() => cambiarPaso(listado[paso][0])}>
							SIGUIENTE
							<div className="arrow-wrapper">
								<div className="arrow__right"></div>
							</div>
						</button>
					</div>
					: ''
			}
			{/* {paso === 'microprocesador' ? <div className='contenedor-tags'>
			    <a onClick={() => filterResult('intel')}>Intel</a>
			    <a onClick={() => filterResult('amd')}>AMD</a>
			    <a onClick={() => clear()}>Todos</a>
			</div> : ''} */}

			{loading ? <Spinner /> : <div className={`${!widthMin && 'row'} contenedorComponentes`}>
				{componentes.length > 0 ? componentes.map((item) => (
					<>

						<div className="col-xl-6 col-md-12 col-8" key={item.id}>
							<div className="cardComponents my-4" >
								<div className="cardComponents-details">

									{listado[paso].find(art => art.Alias === item.Alias) &&
										<OverlayTrigger placement="top" overlay={renderTooltip}>
											<motion.i whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }} className="descliquearComponente text-align-end"
											>
												<MdDeleteForever aria-hidden="true"
													cursor='pointer'
													color='#EE4245'
													size='2.5em'
													onClick={() => handleRemoveItem(item)} />
											</motion.i>
										</OverlayTrigger>
									}
									<img src={item.Imagen} className="btn-verMas img-componente" alt="img Product" />

									<p className="text-body text-center">{item.Descripcion}</p>
									<div className="col-12 ">
										<p className=''> SKU:
											<p className="mb-0" style={{ fontSize: "15" }}>{`${item.Alias}`}</p>
										</p>
										<p className=''> Valor: <br />
											<span className='componente__aliasValor' >
												$ {`${(new Intl.NumberFormat().format(item.Precio))},00`}<br />
											</span>
										</p>
									</div>
									{item.Tipo === 'ram' && listado[paso].find(art => art.Alias === item.Alias) && //CONTADOR DE RAM
										<div className='addRemove'>
											<div className='centrar__botones'>
												<button className='remove' onClick={() => handleRestarCantidadPrecio(item)}>
													<i className="fa-solid fa-minus"></i>
												</button>
												{counterRam}
												<button className='add' onClick={() => handleSumarCantidadPrecio(item)}>
													<i className="fa-solid fa-plus"></i>
												</button>
											</div>
										</div>
									}
									{
										paso !== 'ram' ? '' : listado.ram.length > 0
											&&
											listado.ram[0].Alias === item.Alias
											&&
											widthMin
											&&
											<div className='botones__sgte__ant fade-in d-flex justify-content-end m-3'>
												<button onClick={() => cambiarPaso(listado[paso][0])}>
													SIGUIENTE
													<div className="arrow-wrapper">
														<div className="arrow__right"></div>
													</div>
												</button>
											</div>
									}
								</div>
								{!listado[paso].some(art => art.Alias === item.Alias)
									&& <button onClick={() => handleClick(paso, item)} className="cardComponents-button buttonBuyItNowPcComponents">Elegir</button>
								}
							</div>
						</div>
					</>
				)) : <p>No hay coincidencias.</p>}

			</div>
			}
		</>
	)
}

export default MapeoComponentes;
