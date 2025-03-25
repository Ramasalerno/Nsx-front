import React from 'react'
import "./FooterTestStyle.css"
import { Link } from 'react-router-dom'


export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer_2">

				<div className="row">
					<div className=" col-sm-4 col-md col-sm-4  col-12 col">

						<img src={process.env.PUBLIC_URL + "/imagenes/imagenes-logo/logoNsx.png"} alt="Logo NSX" className='logoFooter'></img>
						<p>NSX ARGENTINA</p>
					</div>

					<div className=" col-sm-6 col-md  col-6 col">
						<ul className="footer_ul_amrc">
							<li><Link to="#"><span className='tituloFooter'>Sobre NSX</span></Link></li>
							<li><Link to="/contacto">Contactanos</Link></li>
							<li><Link to="/">Inicio</Link></li>
						</ul>
					</div>

					<div className=" col-sm-6 col-md  col-6 col">
						<ul className="footer_ul_amrc">
							<li><Link to="#"><span className='tituloFooter'>Soporte Tecnico</span></Link></li>
							<li><Link to="/">Lunes a Viernes de 9 a.m a 6 p.m</Link></li>
							<li><a href="mailto:info@nsx.com.ar">info@nsx.com.ar</a></li>
							<li><a href="mailto:info@nsx.com.ar">soporte@nsx.com.ar</a></li>
						</ul>
					</div>

				</div>
			</div>

		</footer>
	)
}
