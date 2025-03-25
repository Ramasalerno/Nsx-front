import React, { useContext, useEffect, useState } from 'react'
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { PreconfiguradoContext } from '../ContextConfigurador/PreconfiguradoContext';
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';
import { ListadoContext } from '../ContextConfigurador/ListadoContext';
import "./ConfiguradorColumnasStyle.css";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';


export default function PreconfigColumnaIzq({ minWidth, setMinWidth }) {
	const { infoDetallePrecioPreconfigurado, detallePreconfig } = useContext(PreconfiguradoContext);
	const { infoDidMount, paso } = useContext(MarcaProcesadorContext);
	const { ocultarCategoria, listado } = useContext(ListadoContext);
	const { param } = useParams();
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";
	const [show, setShow] = useState(true);

	const [navSize, setnavSize] = useState("60rem");
	const [navColor, setnavColor] = useState("#ffffff");
	const [navVisibility, setNavVisibility] = useState('visible')

	const transitionValues = {
		// duration: 0.8,
		repeat: Infinity,
		repeatType: "reverse"
	};

	const listenScrollEvent = () => {
		window.scrollY > 10 ? setnavColor("#ffffff ") : setnavColor("#ffffff ");
		window.scrollY > 10 ? setnavSize("15rem") : setnavSize("15rem");
		window.scrollY > 300 ? setNavVisibility("hidden") : setNavVisibility("visible");
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	// Tooltips para cada paso 

	const tooltipMicroprocesador = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Microprocesador
		</Tooltip>
	);

	const tooltipMotherboard = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Motherboard
		</Tooltip>
	);

	const tooltipRam = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Ram
		</Tooltip>
	);

	const tooltipDisco = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Disco
		</Tooltip>
	);

	const tooltipGabinete = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Gabinete
		</Tooltip>
	);

	const tooltipVideo = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Placa de video
		</Tooltip>
	);

	const tooltipFuente = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Fuente
		</Tooltip>
	);

	const tooltipArmado = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Armado
		</Tooltip>
	);

	const tooltipCooler = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Cooler
		</Tooltip>
	);

	const tooltipLicencia = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Licencia
		</Tooltip>
	);

	const tooltipMonitor = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Monitor
		</Tooltip>
	);

	const tooltipTeclado = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Teclado
		</Tooltip>
	);

	const tooltipMouse = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Mouse
		</Tooltip>
	);

	const tooltipAuricular = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Auricular
		</Tooltip>
	);

	const tooltipSilla = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Silla
		</Tooltip>
	);

	// Alerta puedes finalizar tu compra

	const alertaFinalizacionCompra = () => {
		Swal.fire('Perfecto! A partir de aca podes finalizar tu compra.')
	}

	if (paso === 'cooler') {
		alertaFinalizacionCompra()
	}

	// -------------------------------------------------------------------


	const handeClick = (/* url,  */component) => {
		setShow(!show)
		infoDidMount(/* url, */ component);
	}

	useEffect(() => {
		infoDetallePrecioPreconfigurado(param);
	}, [infoDetallePrecioPreconfigurado, param, detallePreconfig, imagenCategoria])


	return (

		<motion.div className='configurador-izq' >

			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1000 }} transition={{ delay: 0.5, duration: 0.5 }} className="containerconfig"
				style={!minWidth ? { //SI EL ANCHO DE PANTALLA ES MENOR A 768 
					backgroundColor: navColor,
					height: navSize,
					visibility: navVisibility,
					transition: "all 0.5s"
				}
					: { //SINO
						backgroundColor: navColor,
						visibility: navVisibility,
						transition: "all 0.5s"
					}}>
				<motion.div className="row__categorias armaTuPc mt-3" id="componentesAElegir" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
					<hr />

					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${ocultarCategoria("microprocesador", param)}`}
						id="microprocesador" onClick={() => handeClick("microprocesador")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipMicroprocesador}>
							{
								paso === 'microprocesador' ?
									<motion.div className={paso === 'microprocesador' ? 'stage' : null}

										transition={!minWidth && {
											y: transitionValues,
											width: transitionValues,
											height: transitionValues
										}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "4.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div whileHover={{ scale: 1.1 }}
											transition={!minWidth && { type: "spring", stiffness: 400, damping: 10 }}>
											<img
												className="imgPaso d-xl-block microprocesadorImg" src={`${imagenCategoria}microprocesador.png`} alt="" />
										</motion.div>
									</motion.div> : <motion.div className={paso === 'microprocesador' ? 'stage' : null}>
										<motion.div whileHover={{
											scale: 1.1,
											textShadow: "0px 0px 4px gray"
										}} >
											<img
												className="imgPaso d-xl-block microprocesadorImg" src={`${imagenCategoria}microprocesador.png`} alt="" />
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>

					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1 ${!listado.microprocesador.length > 0 && ocultarCategoria("motherboard", param)}`}
						id="motherboard" onClick={() => handeClick("motherboard")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipMotherboard}>
							{
								paso === 'motherboard' ?
									<motion.div className={paso === 'motherboard' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}
									>
										<motion.div whileHover={{
											scale: 1.1,
											textShadow: "0px 0px 4px gray"

										}} transition={!minWidth && { type: "spring", stiffness: 400, damping: 10 }}>
											<img className="imgPaso d-xl-block motherboardImg" src={`${imagenCategoria}motherboard.png`} alt=""
											/>
										</motion.div>
									</motion.div>
									:
									<motion.div className={paso === 'motherboard' ? 'stage' : null} >
										<motion.div whileHover={{
											scale: 1.1,
											textShadow: "0px 0px 4px gray"
										}} transition={!minWidth && { type: "spring", stiffness: 400, damping: 10 }}>
											<img className="imgPaso d-xl-block motherboardImg" src={`${imagenCategoria}motherboard.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}

						</ OverlayTrigger>

					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.motherboard.length > 0 && ocultarCategoria("ram", param)}`}
						id="ram" onClick={() => handeClick("ram")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipRam}>
							{
								paso === 'ram' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'ram' ? 'stage' : null}
										transition={!minWidth && {
											y: transitionValues,
											width: transitionValues,
											height: transitionValues
										}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img className="imgPaso d-xl-block  ramImg" src={`${imagenCategoria}ram.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'ram' ? 'stage' : null}>
										<motion.div>
											<img className="imgPaso d-xl-block  ramImg" src={`${imagenCategoria}ram.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>

					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.ram.length > 0 && ocultarCategoria("disco", param)}`}
						id="disco" onClick={() => handeClick("disco")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipDisco}>
							{
								paso === 'disco' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'disco' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img className="imgPaso d-xl-block  discoImg" src={`${imagenCategoria}disco.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'disco' ? 'stage' : null}>
										<motion.div>
											<img className="imgPaso d-xl-block  discoImg" src={`${imagenCategoria}disco.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.disco.length > 0 && ocultarCategoria("gabinete", param)}`}
						id="gabinete" onClick={() => handeClick("gabinete")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipGabinete}>
							{
								paso === 'gabinete' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'gabinete' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  gabineteImg" src={`${imagenCategoria}gabinete.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'gabinete' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  gabineteImg" src={`${imagenCategoria}gabinete.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.gabinete.length > 0 && ocultarCategoria("video", param)}`}
						id="video" onClick={() => handeClick("video")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipVideo}>
							{
								paso === 'video' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'video' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block videoImg" src={`${imagenCategoria}video.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'video' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block videoImg" src={`${imagenCategoria}video.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.video.length > 0 && ocultarCategoria("fuente", param)}`}
						id="fuente" onClick={() => handeClick("fuente")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipFuente}>
							{
								paso === 'fuente' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'fuente' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block fuenteImg" src={`${imagenCategoria}fuente.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'fuente' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block fuenteImg" src={`${imagenCategoria}fuente.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.fuente.length > 0 && ocultarCategoria("armado", param)}`}
						id="armado" onClick={() => {
							const handleClick = handleClick("armado");
							const handleALert = () => alertaFinalizacionCompra();
							handleClick();
							handleALert();
						}}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipArmado}>
							{
								paso === 'armado' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'armado' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block armadoImg" src={`${imagenCategoria}armado.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'armado' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block armadoImg" src={`${imagenCategoria}armado.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("cooler", param)}`}
						id="cooler" onClick={() => handeClick("cooler")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipCooler}>
							{
								paso === 'cooler' ? <motion.div whileHover={{
									scale: 1.1,
									textShadow: "0px 0px 4px gray"
								}} className={paso === 'cooler' ? 'stage' : null} transition={!minWidth && {
									y: transitionValues,
									width: transitionValues,
									height: transitionValues
								}}
									animate={!minWidth && {
										y: ["-0.5rem", "0.5rem"],
										width: ["5rem", "5rem", "5.4rem"],
										height: ["5rem", "5rem", "4.5rem"]
									}}>
									<motion.div>
										<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  coolerImg" src={`${imagenCategoria}cooler.png`} alt=""
										/>
									</motion.div>
								</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'cooler' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  coolerImg" src={`${imagenCategoria}cooler.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("licencia", param)}`}
						id="licencia" onClick={() => handeClick("licencia")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipLicencia}>
							{
								paso === 'licencia' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'licencia' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  licenciaImg" src={`${imagenCategoria}licencia.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'licencia' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  licenciaImg" src={`${imagenCategoria}licencia.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("monitor", param)}`}
						id="monitor"
						onClick={() => handeClick("monitor")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipMonitor}>
							{
								paso === 'monitor' ? <motion.div whileHover={{
									scale: 1.1,
									textShadow: "0px 0px 4px gray"
								}} className={paso === 'monitor' ? 'stage' : null} transition={!minWidth && {
									y: transitionValues,
									width: transitionValues,
									height: transitionValues
								}}
									animate={!minWidth && {
										y: ["-0.5rem", "0.5rem"],
										width: ["5rem", "5rem", "5.4rem"],
										height: ["5rem", "5rem", "4.5rem"]
									}}>
									<motion.div>
										<img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  monitorImg" src={`${imagenCategoria}monitor.png`} alt=""
										/>
									</motion.div>
								</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'monitor' ? 'stage' : null}>
										<motion.div>
											<img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  monitorImg" src={`${imagenCategoria}monitor.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("teclado", param)}`}
						id="teclado" onClick={() => handeClick("teclado")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipTeclado}>
							{
								paso === 'teclado' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'teclado' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  tecladoImg" src={`${imagenCategoria}teclado.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'teclado' ? 'stage' : null}>
										<motion.div>
											<img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  tecladoImg" src={`${imagenCategoria}teclado.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("mouse", param)}`}
						id="mouse" onClick={() => handeClick("mouse")}>
						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipMouse}>
							{
								paso === 'mouse' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'mouse' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}} >
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  mouseImg" src={`${imagenCategoria}mouses.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'mouse' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block  mouseImg" src={`${imagenCategoria}mouses.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("auricular", param)}`}
						id="auricular" onClick={() => handeClick("auricular")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipAuricular}>
							{
								paso === 'auricular' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'auricular' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block auricularImg" src={`${imagenCategoria}auricular.png`} alt=""
											/>
										</motion.div>
									</motion.div> : <motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'auricular' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block auricularImg" src={`${imagenCategoria}auricular.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>
					<Col md={3} lg={3} sm={3} xs={3}
						className={`traigo-datos  m-1 my-lg-1  ${!listado.armado.length > 0 && ocultarCategoria("silla", param)}`}
						id="silla" onClick={() => handeClick("silla")}>

						<OverlayTrigger
							placement="top"
							delay={{ show: 250, hide: 400 }}
							overlay={tooltipSilla}>
							{
								paso === 'silla' ?
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'silla' ? 'stage' : null} transition={!minWidth && {
										y: transitionValues,
										width: transitionValues,
										height: transitionValues
									}}
										animate={!minWidth && {
											y: ["-0.5rem", "0.5rem"],
											width: ["5rem", "5rem", "5.4rem"],
											height: ["5rem", "5rem", "4.5rem"]
										}} >
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block sillaImg" src={`${imagenCategoria}silla.png`} alt=""
											/>
										</motion.div>
									</motion.div> :
									<motion.div whileHover={{
										scale: 1.1,
										textShadow: "0px 0px 4px gray"
									}} className={paso === 'silla' ? 'stage' : null}>
										<motion.div>
											<img whileTap={{ scale: 1.7 }} className="imgPaso d-xl-block sillaImg" src={`${imagenCategoria}silla.png`} alt=""
											/>
										</motion.div>
									</motion.div>
							}
						</ OverlayTrigger>
					</Col>


					{/* <a href="/#" className="mt-3 img-intel-category">
						<img alt=""
							style={{ width: "100%" }} src={`${imagenCategoria}/banners/banner_intel.jpg`}
						/>
					</a> */}
				</motion.div>


			</motion.div>

		</motion.div>
	)
} 
