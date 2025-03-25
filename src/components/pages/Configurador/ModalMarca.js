import React, { /* useState, */ useContext } from 'react'
import { Button } from 'react-bootstrap'
import { MarcaProcesadorContext } from './ContextConfigurador/MarcaProcesadorContext';
import './ModalMarca.css';

export default function ModalMarca() {
	const { marca, handleClickMarca, setShow } = useContext(MarcaProcesadorContext);

	return (
		<div className={`modal fade ${marca !== '' && 'd-none'} `} 
		id="modal-configurador" 
		name="config" tabIndex="-1" 
		aria-labelledby="exampleModalLabel" 
		style={{ paddingRight: "17px", display: "block", backgroundColor: "#00000080"}} 
		aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-md">
				<div className="modal-content fade-in-top" id="modal-border">
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setShow(false)}></button>
					<div className="modal-body text-center" id="modal-configurador-mensaje">
						<h5>
						Para comenzar con el armado necesitas seleccionar el procesador Intel o Amd
						</h5>
						<div className="logos-plataforma justify-content-around">
							<Button className='mr-5' value={'044'} onClick={handleClickMarca}>
								Intel
							</Button>
							<Button value={'005'} onClick={handleClickMarca}>
								Amd
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}