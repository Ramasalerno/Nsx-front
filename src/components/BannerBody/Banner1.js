import React from 'react'
import "./BannerBodyStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

export const Banner1 = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn">
      <div className='ocultaImagen'>
        <Link to={"/Drivers_equipos"}><img style={{'width': '100%'}} src={"https://raw.githubusercontent.com/RamiroSB/imagenes/main/ces_1920x300.jpg"} alt="Imagen banner"></img></Link>
      </div>
  </AnimationOnScroll>
  )
}
