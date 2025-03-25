import React, { useContext } from 'react'
import './Price.css'
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';


export default function Price() {
	const { price } = useContext(PreconfiguradoContext);

	return (
		<>
			<span className="totalGastado" id="totalGastado">
				PRECIO TOTAL  {'$'+new Intl.NumberFormat().format(price)},00
			</span><br />
		</>
	)
}
