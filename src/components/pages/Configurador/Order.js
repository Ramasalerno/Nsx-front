import React, { useContext, useState } from 'react'
import { ListadoContext } from './ContextConfigurador/ListadoContext';
import { MapeoOrder } from './MapeoOrder';
import { FormOrder } from './FormOrder';
// import Envio from './Envio';
// import Retira from './Retira';
import './OrderStyle.css'
import Price from './Price';
export default function Order() {
    const { listado, typeDetalle } = useContext(ListadoContext);
    // const [ envioRetira, setEnvioRetira ] = useState(true)
    // const [envio, setEnvio] = useState('')
    let aComponentesAgregados = [];
    let listadoResumen = []
    typeDetalle.forEach(element => {
        if (listado[element].length !== 0) {//SI ESTA EN EL LISTADO LO SUMO AL ARRAY DE COMPONENTES AGREGADOS
            aComponentesAgregados.push(listado[element]);
        }
    });
    aComponentesAgregados.forEach(element => {
        element.forEach(item => {
            listadoResumen.push(item);
        })
    });
    return (
        <div className="container">
            <div className="row" style={{ justifyContent: "space-evenly" }}>
                <div className="col-md-6">
                    <h5 className='mt-3'>INGRESE SUS DATOS PARA GENERAR EL PEDIDO</h5>
                    <div className="col-12 mt-4 mb-5" id='formulario'>
                        {/* {envio === ''
                            ? <>
                                <Envio envio={envio} setEnvio={setEnvio}/>
                                <Retira envio={envio} setEnvio={setEnvio} />
                            </>
                            : envio === 'envio'
                            ? <>
                                <Retira envio={envio} setEnvio={setEnvio} />
                                <FormOrder listadoResumen={listadoResumen} envio={envio} className=''/>
                            </>
                            : envio === 'retira'
                            && <>
                                <Envio envio={envio} setEnvio={setEnvio}/>
                                <FormOrder listadoResumen={listadoResumen} envio={envio} className=''/>
                            </>
                           
                        } */}
                        <FormOrder listadoResumen={listadoResumen} /* envio={envio} */ className=''/>
                    </div>
                </div>
                <div className="col-md-5 p-3" style={{ display: "block" }}>
                    <div className="col-12">
                        <h5>DETALLE DE TU PC NSX</h5>
                    </div>
                    <div className="col-12 mb-3" id="resumenCompra">
                        <MapeoOrder listadoResumen={listadoResumen}/>
                    </div>
                    <Price/>
                </div>
            </div>
        </div>
    )
}