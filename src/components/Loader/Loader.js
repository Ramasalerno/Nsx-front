import React from 'react'
import './LoaderStyle.css'

export function Loader() {
	return (
		<div id="contenedor_carga">
			<div id="carga" style={{
				margin: "auto",
				position: "absolute",
				top: "0",
				left:"0",
				bottom:"120vh",
				right:"0",
				}}>
			</div>
			<h3 className='h3__loader'>
				Cargando...
			</h3>
		</div>
	)
}
