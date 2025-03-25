import React, { useEffect, useState } from 'react'
import "./DriversStyle.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Container, Form } from 'react-bootstrap'
// import SearchBar from '../../SearchBar/SearchBar'
import { RequestProductsDrivers } from '../../helpers/requestDataDrivers'
import { Loader } from '../../Loader/Loader'

const eventoClick = (id) => {
	if(id === 4){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Argus</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/01_Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/02_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/03_Wifi-BT.zip">Wifi & BT</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/04_Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/ARGUS/06_Cardreader.zip">Cardreader</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		  });
		  
	}else if(id === 8){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Alkon</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/00_Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/02_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/03_cardreader.zip">Cardreader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/04_RJ45_LAN.zip">RJ45_LAN</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/05_WIFI.zip">WIFI</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/06_BT.zip">BT</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i5_i7/07_Audio.zip">Audio</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 3){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Epsilon Celeron J4115</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/01_Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/02_Bluetooth.zip">Bluetooth</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/03_Card-reader.zip">Card Reader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/04_Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/05_Dynamic-Platform-Thermal-Framework-Manager.zip">Dynamic Platform Thermal Framework Manager</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/06_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/07_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/08_Serial-IO-drivers.zip">Serial IO</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/09_Wifi.zip">Wifi</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeron/00_Drivers_Epsilon.zip">Download all drivers</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 2){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Epsilon Celeron J4005</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/01-chipset.zip">chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/02-Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/03-Video_win64-6911.zip">Video_win64-6911</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/celeronSerieNuevo/11-WIFI-BT_AC8723DU.zip">WIFI-BT_AC8723DU</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 9){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Kairos</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/00_Chipset_Intel-BKC.zip">Chipset_Intel-BKC</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/01_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/02_Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/03_cardreader.zip">cardreader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/04_Bluetooth.zip">Bluetooth</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/KAIROS/05_WiFi.zip">WiFi</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 1){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Cloud</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/01-Chipset_BKC.zip">Chipset_BKC</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/03_GFX_Video.zip">GFX_Video</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/04_CardReader.zip">CardReader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/05_WIFI.zip">WIFI</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/06_BT.zip">BT</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/CLOUD/07-Audio.zip">Audio</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 7){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Omega</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/01_Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/02_Bluetooth.zip">Bluetooth</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/03_Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/04_Consumer_protection.zip">Consumer Protection</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/05_Dynamic-Tunning-Technology.zip">Dynamic Tunning Technology</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/06_Gaussian_Mixture_Models_and_Neural_Networks_Accelerator.zip">GNA</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/07_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/08_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/09_Intel_Serial_IO_Driver.zip">Serial IO</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/10_Management-Engine-Firmware.zip">Management Engine Firmware</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/11_WLAN.zip">Wifi</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/12_CardReader.zip">Card Reader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/00_Drivers_I3_I5_Sigma_Omicron.zip">Download all drivers</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 5){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Omicron</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/01_Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/02_Bluetooth.zip">Bluetooth</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/03_Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/04_Consumer_protection.zip">Consumer Protection</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/05_Dynamic-Tunning-Technology.zip">Dynamic Tunning Technology</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/06_Gaussian_Mixture_Models_and_Neural_Networks_Accelerator.zip">GNA</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/07_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/08_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/09_Intel_Serial_IO_Driver.zip">Serial IO</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/10_Management-Engine-Firmware.zip">Management Engine Firmware</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/11_WLAN.zip">Wifi</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/12_CardReader.zip">Card Reader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/00_Drivers_I3_I5_Sigma_Omicron.zip">Download all drivers</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 6){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Sigma</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/01_Audio.zip">Audio</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/02_Bluetooth.zip">Bluetooth</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/03_Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/04_Consumer_protection.zip">Consumer Protection</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/05_Dynamic-Tunning-Technology.zip">Dynamic Tunning Technology</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/06_Gaussian_Mixture_Models_and_Neural_Networks_Accelerator.zip">GNA</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/07_Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/08_HID-Event-Filter-Driver.zip">HID Event Filter</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/09_Intel_Serial_IO_Driver.zip">Serial IO</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/10_Management-Engine-Firmware.zip">Management Engine Firmware</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/11_WLAN.zip">Wifi</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/12_CardReader.zip">Card Reader</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/i3_i5/00_Drivers_I3_I5_Sigma_Omicron.zip">Download all drivers</a><br>',
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}else if(id === 10){
		Swal.fire({
			title: '<strong className="descarga">Descargá tus drivers Epsilon N5100</strong>',
			icon: 'info',
			html:
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/EPSILON_N5100/01-BKC-Chipset.zip">Chipset</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/EPSILON_N5100/02-Graphics.zip">Graphics</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/EPSILON_N5100/03-BT.zip">BT</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/EPSILON_N5100/04-WIFI.zip">Wifi</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/EPSILON_N5100/05-Audio-Codec.zip">Audio - Codec</a><br>' +
				'<a href="' + process.env.REACT_APP_DOMAIN_NSX + '/drivers/EPSILON_N5100/06-Cardreader.zip">Cardreader</a><br>', 
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
		})
	}
}

export const Drivers = () => {

	const [data, setData] = useState('');
	const [productFilter, setProductFilter] = useState('')

	useEffect(() => {
		RequestProductsDrivers()
			.then((res) => {
				setData(res)
				setProductFilter(data)
			})
			.catch((e) => {
				console.log(e)
			})
	}, [data])
	const handleOnChange = (e) => {
		const filtrado = e.target.value;
		const searchInput = filtrado.toLowerCase().replace(/ /g, '') // Declaro y sanitizo la variable de búsqueda.
		setProductFilter(data)
		if(data && searchInput !== ''){
			setProductFilter(data.filter((product) =>{
				return product.name.toLowerCase().includes(searchInput)
				
			}))
		}else{
			setProductFilter(data)
		}
	}
	
	return (
		<>
			{!data ? <Loader/> :
				<Container>
					<h3 className='tituloDrivers mt-3 mb-3'>Drivers</h3> <hr />
					<p>Buscá tu modelo de Notebook y descargá los drivers que necesites.  </p><hr />
					<Form className="Form" style={{width: "97%"}}>
						<Form.Control  placeholder="Buscá tu equipo" onChange={handleOnChange} className="TextField" size='lg' />
						<button variant="primary" className='search-productos-button'>
							Buscar
						</button>
					</Form>
					<div className="contenedorDrivers my-5 container-fluid">
						{productFilter && productFilter.sort((a, b) => {return a.id - b.id}).map((driver) => (
							<div className="cardDrivers" key={driver.id}>
								<button className='buttonDriver' onClick={()=>eventoClick(driver.id)}>
									<img className='imgDriver' src={`${process.env.PUBLIC_URL}${driver.img}`} alt="" />
								</button>
								<p>{driver.name}</p>
								<button className='btnDriver px-3 py-2' onClick={()=>eventoClick(driver.id)}>Descargar drivers</button>
							</div>
						))}
					</div>
				</Container>
			}
		</>
	)
}
