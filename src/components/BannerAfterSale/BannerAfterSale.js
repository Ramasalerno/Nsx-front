import React from 'react'
import "../BannerPrincipal/BannerPrincipalStyle.css"
import { Link } from 'react-router-dom'


export const BannerAfterSale = () => {
  return (
    <div className='imgBannerPrincipal'>
        <Link to="/"><img src={"https://www.nsx.com.ar/archivos/banners/es/postventa_banner.jpg"} alt="Imagen banner after sale"></img></Link>
    </div>
  )
}
