import React from 'react'
import { Link } from 'react-router-dom'


export const MapeoPreconfigurados = ({ elemento }) => {
	let imagenPreconfigurado = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/preconfigurados/";

	return (
		<div key={"key"} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-8 col-10 d-flex borde m-3 preconfigurado" id={`${elemento.id}`}>
			<div className="row">
				<Link type='button'
					to={`/Detail/${elemento.id}`}
					className="btn-armarPc d-flex justify-content-center p-0">
					<img className='preconfigurado-img' data-alias={`${elemento.id}`} src={`${elemento.img}`} alt='' />
				</Link>
			</div>
			<div className="showmodel_info__3X-AL d-flex align-items-baseline justify-content-between my-3">
				<div className="text-center">
					<div className="d-flex">
						<div className="ibp_stars">
							<div className="stars5">
								<img className='img-detalleRojo' src={`${process.env.PUBLIC_URL}/imagenes/imagenes-configurador/detalle_conf.png`} alt="stars5_new" aria-label="stars5_new"></img>
							</div>
						</div>
					</div>
				</div>
				<div className="showmodel_price_area__R4OSE precioTypo">
					<p className="showmodel_price__7wG1J preconfigurado-precio"><span></span>{elemento.price}</p>
				</div>
			</div>
			<div className="row d-flex">
				<h6 className="arialFuente margenC">{elemento.description}</h6>
			</div>
			{/* <div className="showmodel_specs__20gX_ arialFuente3">
				<div id={`${elemento.id}`}>{elemento ? elemento.description : ""}</div>
				<div id={`${elemento.id}`}>{elemento ? elemento.description : ""}</div>
				<div id={`${elemento.id}`}>{elemento ? elemento.description : ""}</div>
				<div id={`${elemento.id}`}>{elemento ? elemento.description : ""}</div>
				<div id={`${elemento.id}`}>{elemento ? elemento.description : ""}</div>
				<div id={`${elemento.id}`}>{elemento ? elemento.description : ""}</div>
			</div> */}
			<div className="row text-center d-grid gap-2 p-2 arialFuente">
				<Link
					type="button"
					to={`/Detail/${elemento.id}`}
					id="comenzar"
					data-alias={`${elemento.id}`}
					className="btn-armarPc btn btn-outline-dark">
					Lo quiero!
				</Link>
			</div>
		</div>
	)
}
