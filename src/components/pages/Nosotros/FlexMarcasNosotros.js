import React from 'react'
import "../../FlexMarcas/FlexMarcasStyle.css"

export const FlexMarcasNosotros = () => {
  return (

    <div className="slider mt-4">
      <div className="slide-track">
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_intel.jpg"} height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_amd.jpg"} height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_asus.jpg"} height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_msi.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_patriot.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_corsair.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_coolermaster.jpg"} height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_geforce.jpg"} height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_western.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_kingston.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_microsoft.jpg"}  height="100" width="250" alt=""/>
        </div>
        {/* <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_evga.jpg"}  height="100" width="250" alt=""/>
        </div> */}
        {/* <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_corsair.jpg"}  height="100" width="250" alt=""/>
        </div> */}
        {/* <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_qbox.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_samsung.jpg"}  height="100" width="250" alt=""/>
        </div>
        <div className="slide">
          <img src={process.env.PUBLIC_URL + "/imagenes/imagenes-marcasgrilla/marcas_seagate.jpg"}  height="100" width="250" alt=""/>
        </div> */}
	</div>
</div>

  )
}