import React, { useContext } from 'react'
import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
import { ListadoContext } from './ContextConfigurador/ListadoContext';
import './MapeoOrder.css'

export const MapeoOrder = ({ listadoResumen }) => { //LISTADORESUMEN VIENE DE ORDER.JS
    const { restaPrecios } = useContext(PreconfiguradoContext);
	const { listado, listadoResumenCompra, componentesOpcionales } = useContext(ListadoContext);

    const handleClick = (item) => {
        listadoResumen.forEach((element, index) => {
            if (element.Alias === item.Alias) {
                restaPrecios(item)
                listadoResumen.splice(index, 1)
                listado[item.Tipo].splice(0,1)
                if(listadoResumenCompra[item.Tipo]){
                    listadoResumenCompra[item.Tipo].splice(0,1)
                }
            }
        })
    }

    return (
        <>
            {listadoResumen.map((item) => (
                <div className={`row border p-2`} style={{ borderRadius: "5px" }} key={item.Alias} id={`order__${item.Alias}`}>
                    {}
                    <div className="col-sm-3 col-4 col-lg-3 col-md-2">
                        <img src={`${item.Imagen}`} className="imagenProductoCompra__order img-fluid" style={{ margin: "auto" }} alt="" border="1" />
                    </div>
                    <div className="col-sm-6 col-5 col-lg-7 col-md-7" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p>
                            <span id={`resumenCantidad_${item.Alias}`}>{item.Cantidad ? item.Cantidad : "1"} x </span>
                            {item.Descripcion} <br /> 
                            <span style={{ color: "rgb(40 177 40)", fontWeight: 700 }}>
                                $ {item.Precio}
                            </span>
                        </p>
                    </div>
                    {componentesOpcionales[item.Tipo] && componentesOpcionales[item.Tipo].find(art => art.Alias === item.Alias) && item.Tipo !== 'armado' &&
                        <div className='col-2' style={{ display: "flex",  }}>
                            
                            <i className="fa-solid fa-trash-can descliquearComponente" style={{ cursor: "pointer", display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: 'column' }} aria-hidden="true"
                                sku={`${item.Precio && item.Precio}`} onClick={() => handleClick(item)}>
                                <p className='mt-2' style={{fontSize: '14px', fontWeight: '100'}}>ELIMINAR</p>
                            </i>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}
