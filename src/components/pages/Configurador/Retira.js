import React from 'react'
import './EnvioRetira.css';

const Retira = ({envio, setEnvio}) => {

    const handleClick = (parameter) => {
        setEnvio(parameter);
    }

  return (
    <div className='row'>
        <button className="col-12 border form-control envioRetira" onClick={()=>handleClick("retira")}>
            <img src="https://img.icons8.com/small/32/000000/shop.png" alt='casita'/>
            <p className='mb-0 ml-3'>RETIRA</p>
        </button>
    </div> 
  ) 
}

export default Retira