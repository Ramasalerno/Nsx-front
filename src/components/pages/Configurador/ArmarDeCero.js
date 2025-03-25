import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';

const ArmarDeCero = () => {
    const { initialData } = useContext(PreconfiguradoContext);
    useEffect(()=>{
        initialData() //PARA SETEAR LOS ESTADOS A VACIO PARA PODER ABRIR EL CONFIGURADOR SIN INFO PREVIA
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-8 col-10 d-flex borde m-3" id="armar-de-cero">
            <div className="row">
                <Link to={`/Detail/ArmarDeCero`} className="btn-armarPc d-flex justify-content-center p-0">
                    <img 
                        className='preconfigurado-img' 
                        src={`${process.env.PUBLIC_URL}/imagenes/imagenes-configurador/gabineteVacio.png`}
                        alt="img1">
                    </img>
                </Link>
            </div>
            <div className="showmodel_info__3X-AL d-flex align-items-baseline justify-content-between my-3">
                <div className="text-center">
                    <div className="d-flex">
                        <div className="ibp_stars">
                            <div className="stars5">
                                <img 
                                    className='img-detalleRojo' 
                                    src={`${process.env.PUBLIC_URL}/imagenes/imagenes-configurador/detalle_conf.png`} 
                                    alt="stars5_new" 
                                    aria-label="stars5_new">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button 
                        className="boton_nsx_configuracion btn btn-danger btn-sm btn-armarPc" 
                        href={`/Detail/ArmarDeCero`} 
                        role="button">
                            <span className="text">INICIAR CONFIGURACION</span>
                    </Button>
                </div>

            </div>
            <div className="row d-flex">
            <h6 className="arialFuente margenC">ARMA TU PC DESDE CERO</h6>
            </div>
            <div className="showmodel_specs__20gX_ arialFuente3">
                <div>Operating System</div>
                <div>Processor</div>
                <div>Video Card</div>
                <div>Memory</div>
                <div>Motherboard</div>
                <div>Storage</div>
            </div>
            <div className="row text-center d-grid gap-2 p-2 arialFuente">
                <Button 
                    type="button" 
                    href={`/Detail/ArmarDeCero`} 
                    id="comenzar" 
                    data-marca="ArmarDeCero" 
                    className="btn-armarPc btn btn-outline-dark">
                        Comenzar
                </Button>
            </div>
        </div>
        </>
    )
}

export default ArmarDeCero;