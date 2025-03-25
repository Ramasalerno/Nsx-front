import React from 'react'
import { Button } from 'react-bootstrap'
import './FooterSNStyle.css'

export const FooterSN = () => {
  return (
    <div>
      

    <div className='footer_1'>
        <img src={"https://raw.githubusercontent.com/RamiroSB/imagenes/main/nsxgamer/nsxGamingLogoFooter.png"} alt="Imagen NSX"></img>

        <h3 className='mt-5'>Newsletter</h3>
        <div><Button className='button' href='http://skins.ineva.com.ar/skins/Suscriptor.aspx?id=615&returl=https://www.nsx.com.ar/' target='_blank' rel="noreferrer">Suscribite al newsletter</Button></div>
    </div>

    </div>
  )
}