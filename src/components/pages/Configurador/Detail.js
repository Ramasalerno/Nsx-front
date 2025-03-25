import React, { useEffect, useState, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PreconfigColumnaIzq from './PreconfigDetailColumnas/PreconfigColumnaIzq'
import { PreconfigColumnaDer } from './PreconfigDetailColumnas/PreconfigColumnaDer';
import { PreconfigColumnaMedio } from './PreconfigDetailColumnas/PreconfigColumnaMedio';
import { RequestPreconfigurados } from '../../helpers/requestDataPreconfigurado';
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
import { ListadoContext } from './ContextConfigurador/ListadoContext';
import { MarcaProcesadorContext } from './ContextConfigurador/MarcaProcesadorContext';
import { Loader } from '../../Loader/Loader';
import { useParams } from 'react-router-dom';
// import "react-step-progress/dist/index.css";
// import ModalMarca from './ModalMarca';
// import ModalInfo from './ModalInfo';
import "./ConfiguradorStyle.css";
import { PreconfigFilters } from './PreconfigDetailColumnas/PreconfigFilters';

export function Detail() {

	const { preconfigurado, detallePreconfig, initialData } = useContext(PreconfiguradoContext);
	const { initialDataMarca, infoDidMount, componentes } = useContext(MarcaProcesadorContext);
	const { addComponentList, typeDetalle, initialDataListado } = useContext(ListadoContext);
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(false);
	const { param } = useParams();
	const [show, setShow] = useState(false);
	const [minWidth, setMinWidth] = useState(false);


	useEffect(() => {
		initialDataMarca(); /* SETEA LA MARCA DEL PROCESADOR A '' */
		initialData()
		initialDataListado() //VACIA EL LISTADO
		setLoading(true)
		RequestPreconfigurados()
			.finally(() => {
				setTimeout(() => {
					setLoading(false)
					// param === "ArmarDeCero" && document.querySelector('#modal-info').classList.toggle("show")
					infoDidMount("microprocesador")
					// param === "ArmarDeCero" && document.querySelector('#modal-configurador').classList.toggle("show")
				}, 1500);
			})

		if (window.innerWidth < 768) {
			setMinWidth(!minWidth)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [param])

	typeDetalle.forEach((element) => {
		let infoDetalle = detallePreconfig.find(art => art.Tipo === element) //GUARDO EL TIPO DE ELEMENTO QUE COINCIDE
		if (detallePreconfig.find(art => art.Tipo === element) && infoDetalle !== undefined) { //SI EL TIPO DE COMPONENTE DEL PRECONFIGURADO ESTÁ DENTRO DEL ARRAY QUE ARMÉ ES TRUE
			addComponentList(element, infoDetalle)
		}
	})

	return (
		<>
			{componentes.length === 0
				? <Loader />
				:
				<>
					{/* {param === "ArmarDeCero" && <ModalMarca/>} */}
					{/* { param === "ArmarDeCero" && <ModalInfo/> } */}

					<div className='container'>
						<button className='d-lg-none d-md-none button-85 m-1' onClick={() => setShow(!show)}>{!show ? 'Ocultar Componentes' : 'Ver componentes'}</button>
					</div>
					<Container fluid className='container__columnaIzq'>
						<Row className="row__columna">
							{/* <Col xxl={4} lg={5} md={5} sm={12} className={`pt-0 mt-0 pr-0 pl-0 ${show ? 'slide-out-bottom' : 'slide-in-bottom' }`} id='columna1'> */}

							<Col xxl={3} lg={3} md={3} className="pt-0 mt-0 px-0" id='columna3'>
								<PreconfigFilters preconfigurado={preconfigurado} minWidth={minWidth} />
							</Col>
							<Col xxl={4} lg={3} md={3} className='pt-0 mt-5 pr-0' style={{ top: '0px' }} id='columna2'>
								<PreconfigColumnaMedio preconfigurado={preconfigurado} />
							</Col>
							<Col xxl={3} lg={3} md={3} className="pt-0 mt-0 px-0" id='columna3'>
								<PreconfigColumnaDer preconfigurado={preconfigurado} minWidth={minWidth}/>
							</Col>

							<Col xxl={12} lg={12} md={12} sm={12} className={`pt-0 mt-0 pr-0 pl-0 ${!show ? 'd-block' : !minWidth ? 'd-block' : 'd-none'}`} id='columna1'>
								<PreconfigColumnaIzq minWidth={minWidth} setMinWidth={setMinWidth}/>
							</Col>

						</Row>
					</Container>
				</>
			}
		</>
	)
};