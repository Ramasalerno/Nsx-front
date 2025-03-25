import React from 'react'
import './EnvioRetira.css';

const Envio = ({envio, setEnvio}) => {

    const handleClick = (parameter) => {
        setEnvio(parameter);
    }

  return (
    <div className='row'>
        <button className="col-12 border form-control envioRetira" onClick={()=>handleClick("envio")}>
          <img src="https://img.icons8.com/small/32/000000/truck.png" alt='mionca'/>
          <p className='mb-0 ml-3'>ENVÍO</p>
        </button>
    </div> 
  ) 
}

export default Envio