import React from 'react'
import "./PageNotFoundStyle.css"
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className='contenedorNotFound'>
        <Link to="/"><img src={process.env.PUBLIC_URL + "/imagenes/Imagen-error404/pagenotfound.jpg"} alt="Imagen banner"></img></Link>
    </div>
  )
}

