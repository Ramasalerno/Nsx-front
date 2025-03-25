import React,{useContext, useState} from 'react'
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import '../ConfiguradorStyle.css'
import MapeoComponentes from './MapeoComponentes';
import { MarcaProcesadorContext } from '../ContextConfigurador/MarcaProcesadorContext';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


export function PreconfigColumnaMedio() {
	const { param } = useParams();
    const { componentes } = useContext(MarcaProcesadorContext);

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
		  ¿Necesitas ayuda? Prueba chatear!
		</Tooltip>
	  );
	

	const imagen = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/preconfigurados/" + param + ".png";

	return (
		<>
			{!componentes
				? <div className="justify-content-center" id="faltaDeProductos">
					<Row className="d-none">
						<h3>NO HAY PRODUCTOS DISPONIBLES.</h3>
					</Row>
					<img className='img__columnaMedio' src={`${imagen}`} alt="" />
				</div>
				: (
					<>
				<MapeoComponentes />
				<div className="containerwsp">
					<input type='checkbox'id="btnmas" />
					<div className="redes">
						<a href="https://api.whatsapp.com/send?phone=541531397547&text=%C2%A1Hola%21+Estoy+en+la+tienda+NSX+GAMING+y+quiero+pedir+m%C3%A1s+informaci%C3%B3n." >
						<i className="fa fa-whatsapp" aria-hidden="true"></i>
						</a>
					</div>
					<div className="btnmas">
					<OverlayTrigger
                     placement="left"
                     delay={{ show: 250, hide: 400 }}
                     overlay={renderTooltip}>
                      <label for="btnmas" className="iconmas2">
					  <i className="fas fa-plus"></i>
					  </label>
					  </ OverlayTrigger>
					</div>
				</div>
				</>
				)
			}
		</>
	)
}
