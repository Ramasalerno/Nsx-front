import React from 'react'
import { Link } from 'react-router-dom'
import "./FlexBodyStyle.css"

const imgPcGaming = `${process.env.PUBLIC_URL}/imagenes/BannersHome/D_NQ_NP_760223-MLA51827197574_102022-F.jpg`;
const imgNotebooks = `${process.env.PUBLIC_URL}/imagenes/BannersHome/D_NQ_NP_666244-MLA51827181737_102022-F.jpg`;

export const FlexBody = () => {
  return (
    <div className='flexContainer'>

      <div>
        <img src={imgPcGaming} alt="Imagen AMD" className="imgTest"></img>
        <div className='holis px-2'>
          <h5>Pc Gaming</h5>
          <a href='https://www.nsx.com.ar/listado/computacion/' className='btn btn-outline-light'>Ver más</a>
        </div>
      </div>

      <div>
        <img src={imgNotebooks} alt="Imagen INTEL" className="imgTest"></img>
        <div className='holis px-2'>
          <h5>Notebooks</h5>
          <a href='https://www.nsx.com.ar/' className='btn btn-outline-light'>Ver más</a>
        </div>
      </div>

    </div>
  )
}
