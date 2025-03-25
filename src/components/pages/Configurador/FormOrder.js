import React, { useContext, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListadoContext } from './ContextConfigurador/ListadoContext';
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './FormOrder.css';
import { nanoid } from 'nanoid';
//import emailjs from "@emailjs/browser";

export const FormOrder = ({ listadoResumen, envio }) => {
	const { listado } = useContext(ListadoContext);
	const { price } = useContext(PreconfiguradoContext);
	const { param } = useParams();
	const form = useRef();

	// Redireccion de mails de confirmacion con emailjs
	/*
		const sendEmail = (e) => {
			e.preventDefault();
	
			emailjs.sendForm('service_az2mxne', 'template_gtwrblu', form.current, 'user_NSHvzdV4KM23kqqZqoR3a')
				.then((result) => {
					console.log(result.text);
				}, (error) => {
					console.log(error.text);
				});
		}; 
	*/

	const [datosForm, setDatosForm] = useState(
		envio === 'envio' ?
			{
				name: '',
				lastName: '',
				email: '',
				dni: '',
				telefono: '',
				calle: '',
				numero: '',
				provincia: '',
				localidad: '',
				codigoPostal: '',
				listado: listado,
				precioTotal: "ARS $ " + price,
				aliasPreconfig: param,
				auricular: 'auricular',
				licencia: 'licencia',
				monitor: 'monitor',
				mouse: 'mouse',
				silla: 'silla',
				teclado: 'teclado',
				microprocesador: 'microprocesador',
				motherboard: 'motherboard',
				cooler: 'cooler',
				ram: 'ram',
				disco: 'disco',
				gabinete: 'gabinete',
				video: 'video',
				fuente: 'fuente',
				armado: 'armado',
				pedido: 'pedido'
			}
			:
			{
				name: '',
				lastName: '',
				email: '',
				dni: '',
				telefono: '',
				calle: 'RETIRA',
				numero: 'RETIRA',
				provincia: 'RETIRA',
				localidad: 'RETIRA',
				codigoPostal: 'RETIRA',
				listado: listado,
				precioTotal: "ARS $ " + price,
				aliasPreconfig: param,
				auricular: 'auricular',
				licencia: 'licencia',
				monitor: 'monitor',
				mouse: 'mouse',
				silla: 'silla',
				teclado: 'teclado',
				microprocesador: 'microprocesador',
				motherboard: 'motherboard',
				cooler: 'cooler',
				ram: 'ram',
				disco: 'disco',
				gabinete: 'gabinete',
				video: 'video',
				fuente: 'fuente',
				armado: 'armado',
				pedido: 'pedido'
			})

	const handleInputChange = (event) => {
		setDatosForm({
			...datosForm,
			[event.target.name]: event.target.value,
		})
	}
	const handleSubmit = () => {
		if (datosForm.name !== "" && datosForm.lastName !== "" && datosForm.email !== "" && datosForm.telefono !== "" && datosForm.dni !== "") {
			Swal.fire({
				icon: 'success',
				title: 'Su pedido fue registrado correctamente!',
				html: `Nos contactaremos a la brevedad para coordinar metodo de pago y envio o retiro en sucursal! <br>Podes escribirnos vía whatsapp al 1562835042 <br> <u>Tu ID único de pedido es: <b>${pedido}</b></u>`,
			}).then(function () {
				window.location = "/";
			});
		} else {
			Swal.fire({
				icon: 'error',
				confirmButtonColor: "#008BF8",
				title: 'Debes completar todos tus datos para procesar tu solicitud!',
			})
		}
	}

	/*---PROCESADOR---*/
	let pedido;
	listado.armado.length > 0
		? pedido = nanoid(10)
		: pedido = 'No hay pedido completo';

	/*---PROCESADOR---*/
	let microprocesador;
	if (listado.microprocesador.length > 0) {
		let aliasProcesador = datosForm.listado.microprocesador[0].Alias;
		let descripcionProcesador = datosForm.listado.microprocesador[0].Descripcion;
		let valorProcesador = datosForm.listado.microprocesador[0].Precio;
		microprocesador =
			`<ul><li><b>SKU:</b> ${aliasProcesador},</li> <li><b>Descripcion:</b> ${descripcionProcesador},</li> <li><b>Valor </b>ARS $ ${valorProcesador}</li></ul>`
	} else {
		microprocesador = "No fue seleccionado ningun procesador";
	}

	/*---MOTHERBOARD---*/
	let motherboard;
	if (listado.motherboard.length > 0) {
		let aliasMotherboard = datosForm.listado.motherboard[0].Alias;
		let descripcionMotherboard = datosForm.listado.motherboard[0].Descripcion;
		let valorMotherboard = datosForm.listado.motherboard[0].Precio;
		motherboard = `<ul><li><b>SKU:</b> ${aliasMotherboard},</li> <li><b>Descripcion:</b>${descripcionMotherboard},</li> <li><b>Valor:</b> ARS $ ${valorMotherboard}</li></ul>`
	} else {
		motherboard = "No fue seleccionado ningun procesador";
	}

	/*---RAM---*/
	let ram;
	if (listado.ram.length > 0) {
		let aliasRam = datosForm.listado.ram[0].Alias;
		let descripcionRam = datosForm.listado.ram[0].Descripcion;
		let valorRam = datosForm.listado.ram[0].Precio;
		let cantidadRam = datosForm.listado.ram[0].Cantidad;
		ram = `<ul><li><b>SKU:</b> ${aliasRam},</li> <li><b>Descripcion:</b> ${descripcionRam},</li> <li><b>Cantidad:</b> ${cantidadRam},</li><li><b>Valor: </b>ARS $ ${valorRam}</li></ul>`
	} else {
		ram = "No fue seleccionado ninguna memoria ram";
	}

	/*---DISCO---*/
	let disco;
	if (listado.disco.length > 0) {
		let aliasDisco = datosForm.listado.disco[0].Alias;
		let descripcionDisco = datosForm.listado.disco[0].Descripcion;
		let valorDisco = datosForm.listado.disco[0].Precio;
		let cantidadDisco = datosForm.listado.disco[0].Cantidad;
		disco = `<ul><li><b>SKU:</b> ${aliasDisco},</li> <li><b>Descripcion:</b> ${descripcionDisco},</li> <li><b>Cantidad:</b> ${cantidadDisco},</li> <li><b>Valor:</b> ARS $ ${valorDisco}</li></ul>`
	} else {
		disco = "No fue seleccionado ningun disco";
	}

	/*---GABINETE---*/
	let gabinete;
	if (listado.gabinete.length > 0) {
		let aliasGabinete = datosForm.listado.gabinete[0].Alias;
		let descripcionGabinete = datosForm.listado.gabinete[0].Descripcion;
		let valorGabinete = datosForm.listado.gabinete[0].Precio;
		gabinete = `<ul><li><b>SKU:</b> ${aliasGabinete},</li> <li><b>Descripcion:</b> ${descripcionGabinete},</li> <li><b>Valor:</b> ARS $ ${valorGabinete}</li></ul>`
	} else {
		gabinete = "No fue seleccionado ningun gabinete";
	}

	/*---PLACA DE VIDEO---*/
	let video;
	if (listado.video.length > 0) {
		let aliasVideo = datosForm.listado.video[0].Alias;
		let descripcionVideo = datosForm.listado.video[0].Descripcion;
		let valorVideo = datosForm.listado.video[0].Precio;
		video = `<ul><li><b>SKU:</b> ${aliasVideo},</li> <li><b>Descripcion:</b> ${descripcionVideo},</li> <li><b>Valor:</b> ARS $ ${valorVideo}</li></ul>`
	} else {
		video = "No fue seleccionado ninguna placa de video";
	}

	/*---FUENTE---*/
	let fuente;
	if (listado.fuente.length > 0) {
		let aliasFuente = datosForm.listado.fuente[0].Alias;
		let descripcionFuente = datosForm.listado.fuente[0].Descripcion;
		let valorFuente = datosForm.listado.fuente[0].Precio;
		fuente = `<ul><li><b>SKU:</b> ${aliasFuente},</li> <li><b>Descripcion:</b> ${descripcionFuente},</li> <li><b>Valor:</b> ARS $ ${valorFuente}</li></ul>`
	} else {
		fuente = "No fue seleccionado ninguna fuente";
	}

	/*---ARMADO---*/
	let armado;
	if (listado.armado.length > 0) {
		let valorArmado = datosForm.listado.armado[0].Precio;
		armado = `Valor ARS $ ${valorArmado}`
	} else {
		armado = "No fue seleccionado ningun servicio de armado";
	}

	/*---COOLER---*/
	let cooler;
	if (listado.cooler.length > 0) {
		let aliasCooler = datosForm.listado.cooler[0].Alias;
		let descripcionCooler = datosForm.listado.cooler[0].Descripcion;
		let valorCooler = datosForm.listado.cooler[0].Precio;
		cooler = `<ul><li><b>SKU:</b> ${aliasCooler},</li> <li><b>Descripcion:</b> ${descripcionCooler},</li> <li><b>Valor:</b> ARS $ ${valorCooler}</li></ul>`
	} else {
		cooler = "No fue seleccionado ningun cooler";
	}


	/*---AURICULAR---*/
	let auricular;
	if (listado.auricular.length > 0) {
		let aliasAuricular = datosForm.listado.auricular[0].Alias;
		let descripcionAuricular = datosForm.listado.auricular[0].Descripcion;
		let valorAuricular = datosForm.listado.auricular[0].Precio;
		auricular = `<ul><li><b>SKU:</b> ${aliasAuricular},</li> <li><b>Descripcion:</b> ${descripcionAuricular},</li> <li><b>Valor:</b> ARS $ ${valorAuricular}</li></ul>`
	} else {
		auricular = "No fue seleccionado ningun auricular";
	}

	/*---LICENCIA---*/
	let licencia
	if (listado.licencia.length > 0) {
		let aliasLicencia = datosForm.listado.licencia[0].Alias;
		let descripcionLicencia = datosForm.listado.licencia[0].Descripcion;
		let valorLicencia = datosForm.listado.licencia[0].Precio;
		licencia = `<ul><li><b>SKU:</b> ${aliasLicencia},</li> <li><b>Descripcion:</b> ${descripcionLicencia},</li> <li><b>Valor:</b> ARS $ ${valorLicencia}</li></ul>`
	} else {
		licencia = "No fue seleccionado ninguna licencia";
	}

	/*---MONITOR---*/
	let monitor
	if (listado.monitor.length > 0) {
		let aliasMonitor = datosForm.listado.monitor[0].Alias;
		let descripcionMonitor = datosForm.listado.monitor[0].Descripcion;
		let valorMonitor = datosForm.listado.monitor[0].Precio;
		monitor = `<ul><li><b>SKU:</b> ${aliasMonitor},</li> <li><b>Descripcion:</b> ${descripcionMonitor},</li> <li><b>Valor:</b> ARS $ ${valorMonitor}</li></ul>`
	} else {
		monitor = "No fue seleccionado ningun monitor";
	}

	/*---MOUSE---*/
	let mouse
	if (listado.mouse.length > 0) {
		let aliasMouse = datosForm.listado.mouse[0].Alias;
		let descripcionMouse = datosForm.listado.mouse[0].Descripcion;
		let valorMouse = datosForm.listado.mouse[0].Precio;
		mouse = `<ul><li><b>SKU:</b> ${aliasMouse},</li> <li><b>Descripcion:</b> ${descripcionMouse},</li> <li><b>Valor:</b> ARS $ ${valorMouse}</li></ul>`
	} else {
		mouse = "No fue seleccionado ningun mouse";
	}

	/*---SILLA---*/
	let silla
	if (listado.silla.length > 0) {
		let aliasSilla = datosForm.listado.silla[0].Alias;
		let descripcionSilla = datosForm.listado.silla[0].Descripcion;
		let valorSilla = datosForm.listado.silla[0].Precio;
		silla = `<ul><li><b>SKU:</b> ${aliasSilla},</li> <li><b>Descripcion:</b> ${descripcionSilla},</li> <li><b>Valor:</b> ARS $ ${valorSilla}</li></ul>`
	} else {
		silla = "No fue seleccionada ninguna silla";
	}

	/*---TECLADO---*/
	let teclado
	if (listado.teclado.length > 0) {
		let aliasTeclado = datosForm.listado.teclado[0].Alias;
		let descripcionTeclado = datosForm.listado.teclado[0].Descripcion;
		let valorTeclado = datosForm.listado.teclado[0].Precio;
		teclado = `<ul><li><b>SKU:</b> ${aliasTeclado},</li> <li><b>Descripcion:</b> ${descripcionTeclado},</li> <li><b>Valor:</b> ARS $ ${valorTeclado}</li></ul>`
	} else {
		teclado = "No fue seleccionado ninguno teclado";
	}

	return (
		<>
			{/* <Form action="http://10.0.10.47:1551/contact" method="POST" className='my-3 row fade-in-fwd'> */}
			{/* <Form action="http://localhost:3000/checkout" method="POST" className='my-3 row fade-in-fwd'> */}
			{/* <Form action="https://info.nsx.com.ar/mail/contact" method="POST" className='my-3 row fade-in-fwd' ref={form} onSubmit={sendEmail}> */}
			<Form action="https://info.nsx.com.ar/mail/contact" method="POST" className='my-3 row fade-in-fwd'>
				<div className='col-12'>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" name="name" onChange={handleInputChange} placeholder="" required />
						<Form.Text className="text-muted">
						</Form.Text>
					</Form.Group>
				</div>
				<div className='col-12'>
					<Form.Group className="mb-3">
						<Form.Label>Apellido</Form.Label>
						<Form.Control type="text" name="lastName" onChange={handleInputChange} placeholder="" required />
						<Form.Text className="text-muted">

						</Form.Text>
					</Form.Group>
				</div>
				<div className='col-12'>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name='email' pattern='^[^@\s]+@[^@\s]+\.[^@\s]+$' onChange={handleInputChange} placeholder="Coloque su email" required />
						<Form.Text className="text-muted">
						</Form.Text>
					</Form.Group>
				</div>
				<div className='col-12'>
					<Form.Group className="mb-3" controlId="formBasicDni">
						<Form.Label>DNI</Form.Label>
						<Form.Control type="number" name='dni' pattern='[0-9]{3}' onChange={handleInputChange} placeholder="Coloque su DNI sin puntos" required />
					</Form.Group>
				</div>
				<div className='col-12'>
					<Form.Group className="mb-3" controlId="formBasicPhone">
						<Form.Label>Telefono</Form.Label>
						<Form.Control type="number" name='telefono' pattern='+[0-9]{4}' onChange={handleInputChange} placeholder="Ingrese su telefono" required />
					</Form.Group>
				</div>

				{envio === 'envio' ?
					<>
						<div className='col-12'>
							<Form.Group className="mb-3" controlId="formBasicStreet">
								<Form.Label>Calle</Form.Label>
								<Form.Control type="text" name='calle' onChange={handleInputChange} placeholder="Coloque su direccion" required />
								<Form.Text className="text-muted">
								</Form.Text>
							</Form.Group>
						</div>
						<div className='col-12'>
							<Form.Group className="mb-3" controlId="formBasicAddress">
								<Form.Label>Numero</Form.Label>
								<Form.Control type="number" name='numero' min={0} onChange={handleInputChange} placeholder="Numero de casa/departamento" required />
							</Form.Group>
						</div>
						<div className='col-12'>
							<div className="mb-3">
								<Form.Label>Provincia</Form.Label>
								<Form.Select name='provincia' onChange={handleInputChange} className="mb-3 form-control">
									{/* <Form.Control type="select" name='provincia' onChange={handleInputChange} placeholder="Coloque su localidad" required/> */}
									<option disabled>Coloque su provincia</option>
									<option value="SALTA">SALTA</option>
									<option value="BUENOS_AIRES">BUENOS_AIRES</option>
									<option value="CAPITAL_FEDERAL">CAPITAL_FEDERAL</option>
									<option value="LA_RIOJA">LA_RIOJA</option>
									<option value="ENTRE_RIOS">ENTRE_RIOS</option>
									<option value="FORMOSA">FORMOSA</option>
									<option value="SANTIAGO_DEL_ESTERO">SANTIAGO_DEL_ESTERO</option>
									<option value="CHCACO">CHCACO</option>
									<option value="SAN_JUAN">SAN_JUAN</option>
									<option value="CATAMARCA">CATAMARCA</option>
									<option value="LA_PAMPA">LA_PAMPA</option>
									<option value="MENDOZA">MENDOZA</option>
									<option value="MISIONES">MISIONES</option>
									<option value="SAN_LUIS">SAN_LUIS</option>
									<option value="NEUQUEN">NEUQUEN</option>
									<option value="RIO_NEGRO">RIO_NEGRO</option>
									<option value="SANTA_FE">SANTA_FE</option>
									<option value="TUCUMAN">TUCUMAN</option>
									<option value="CHUBUT">CHUBUT</option>
									<option value="TIERRA_DEL_FUEGO">TIERRA_DEL_FUEGO</option>
									<option value="CORRIENTES">CORRIENTES</option>
									<option value="CORDOBA">CORDOBA</option>
									<option value="JUJUY">JUJUY</option>
									<option value="SANTA_CRUZ">SANTA_CRUZ</option>
								</Form.Select>
							</div>
						</div>
						<div className='col-12'>
							<Form.Group className="mb-3" controlId="formBasicBarrio">
								<Form.Label>Localidad</Form.Label>
								<Form.Control type="text" name='localidad' onChange={handleInputChange} placeholder="Coloque su localidad" required />
								<Form.Text className="text-muted">
								</Form.Text>
							</Form.Group>
						</div>
						<div className='col-12'>
							<Form.Group className="mb-3" controlId="formBasicPostalCode">
								<Form.Label>Codigo Postal</Form.Label>
								<Form.Control type="number" name='codigoPostal' onChange={handleInputChange} placeholder="CP" required />
							</Form.Group>
						</div>
					</>
					:
					<p className='my-4'><img src="https://img.icons8.com/material-outlined/16/000000/spam.png" alt='' />Puede encontrarnos en <strong>Goncalves Dias 666</strong>, Ciudad Autonoma de Buenos Aires (C1276ACH), República Argentina</p>

				}

				{/* FORMULARIO OCULTO PARA ENVIAR INFORMACION CON NODEMAILER */}
				<Form.Group className="mb-3 d-none" controlId="formBasicPassword">
					<Form.Control type="hidden" name='listado' value={listado && listado} onChange={handleInputChange} />
				</Form.Group>
				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='precioTotal' value={price && price} onChange={handleInputChange} />
				</Form.Group>
				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='pedido' value={pedido && pedido} onChange={handleInputChange} />
				</Form.Group>

				{/* COMIENZAN ITEMS NO OPCIONALES (NUEVO, REEMPLAZA PRECONFIGURADO) */}
				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='microprocesador' value={microprocesador && microprocesador} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='motherboard' value={motherboard && motherboard} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='ram' value={ram && ram} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='disco' value={disco && disco} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='gabinete' value={gabinete && gabinete} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='video' value={video && video} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='fuente' value={fuente && fuente} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='armado' value={armado && armado} onChange={handleInputChange} />
				</Form.Group>

				{/* COMIENZAN ITEMS OPCIONALES */}
				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='auricular' value={auricular && auricular} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='cooler' value={cooler && cooler} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='licencia' value={licencia && licencia} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='monitor' value={monitor && monitor} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='mouse' value={mouse && mouse} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='silla' value={silla && silla} onChange={handleInputChange} />
				</Form.Group>

				<Form.Group className="mb-3 d-none" controlId="formBasicPrecio">
					<Form.Control type="hidden" name='teclado' value={teclado && teclado} onChange={handleInputChange} />
				</Form.Group>

				<Button variant="primary btn-block" id="realizarPedido" type='submit' onClick={handleSubmit}>
					REALIZAR PEDIDO
				</Button>
				<div className='mt-3 px-0 d-flex justify-content-between'>
					<Button href={`/Detail/${param}`} className='reiniciarConfig' type="button" variant="outline-danger" >REINICIAR CONFIGURACION</Button>
					<Button href={`/`} className='reiniciarConfig' variant="outline-danger" >VOLVER AL INICIO</Button>
					{/* <Button href={`/configurador`} className='' id='volverAEmpezar' variant="secondary">VOLVER A EMPEZAR</Button> */}
				</div>


			</Form>


		</>
	)
}
