import React from 'react'
import "./BannerBodyStyle.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';

export const BannerBody = () => {
  return (
    /* <div className='mb-5 mt-3 contenedorBanner'>
      <a id='catalogo' href={process.env.PUBLIC_URL+`catalogo/catalogo_nsx.pdf`} download='catalogo_nsx.pdf'><img src={"https://www.nsx.com.ar/archivos/banners/es/bannerWebNSX1200x200.jpg"} alt="Imagen banner"></img></a>
    </div> */
  <AnimationOnScroll animateIn="animate__fadeIn">
      <div className='mb-5 mt-3 contenedorBanner'>
        <Link to={"/Drivers_equipos"}><img src={"https://http2.mlstatic.com/D_NQ_NP_775258-MLA52127939364_102022-OO.jpg)"} alt="Imagen banner"></img></Link>
      </div>
  </AnimationOnScroll>

  )
}

