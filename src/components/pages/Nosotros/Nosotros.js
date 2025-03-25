import React from 'react'
import './Nosotros.css'
import { FlexMarcasNosotros } from './FlexMarcasNosotros'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Nosotros = () => {
  return (
    <div className="content">
      <div className="contact-wrapper container">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <h1 className='titleProduct'>NOSOTROS!</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <h5 className='text-center px-5'>
            Somos una marca Argentina dedicada al ensamble de PCs de oficina, PCs gamer y notebooks fundada por Solution Box SRL (Distribuidora Líder en el mercado de tecnología e informática, representado a las principales 60 marcas de consumo y corporativas).
          </h5>
        </AnimationOnScroll>

        <div className='contenedorAboutInicios mt-5'>
          <AnimationOnScroll className='parrafoInicios' animateIn='animate__fadeIn animate__delay-2s'>
            <p>
              <br /><br /> <strong>Nuestros inicios</strong> <br />
              <span className='color'> NSX</span> comenzó en el año 2020 impulsada por la necesidad de suplir el mercado ante el faltante de stock a nivel mundial. La evolución del mundo tecnológico impactó en la cotidianeidad de tal forma que cada persona se convirtió en usuario de una notebook o PC.
              Nuestra fábrica ubicada en Barracas, CABA inició con sus funciones en el mes de septiembre 2020 con un equipo de tan solo 4 personas. Rápidamente fuimos creciendo y se logró alcanzar la certificación ISO 9001 para nuestros productos. Hoy en día llevamos ensambladas 27.000 unidades y contamos con un equipo de 18 personas.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInLeft'>
            <img className='imgInicios' src={process.env.PUBLIC_URL + `/imagenes/imagenes-nosotros/1_inicios.jpg`} alt="" />
          </AnimationOnScroll>
        </div>

        <div className='contenedorAboutVision mt-3'>
          <AnimationOnScroll className='parrafoVision' animateIn='animate__fadeIn animate__delay-2s'>
            <p>
              <br /><br /><strong>Nuestra visión</strong> <br />
              Nuestra visión es liderar el mercado ofreciendo una opción atractiva con tecnología de vanguardia para aquellos que valoran la combinación de un precio competitivo con un desempeño excepcional. Queremos asegurarnos de que cada cliente que elija nuestros productos se sienta satisfecho con su compra y la experiencia brindada. <br />El servicio de post venta es fundamental en nuestro compromiso de ofrecer una atención personalizada y eficiente, resolviendo cualquier problema de manera rápida y efectiva.
              Buscamos ser una marca de notebooks y PCs reconocida por la calidad, la confiabilidad, la innovación, y el servicio al cliente. Nos esforzamos por marcar la diferencia en el mercado, destacando por la oferta de productos con una inmejorable relación precio-calidad. Queremos ser la elección preferida de los argentinos que buscan tecnología confiable y de vanguardia, respaldada por un servicio excepcional.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInRight animate__delay-2s' className='scrollImgVision'>
            <img className='imgVision' src={process.env.PUBLIC_URL + `/imagenes/imagenes-nosotros/2_vision.jpg`} alt="" />
          </AnimationOnScroll>
        </div>

        <div className='contenedorAboutServicios mt-3'>
          <AnimationOnScroll className='parrafoServicios' animateIn='animate__fadeIn animate__delay-2s'>
            <p>
              <br /><br /><strong>Nuestros servicios</strong> <br />
              <ul className='ulParrafos'>
                <li>Contamos con atención personalizada a cargo de especialistas para orientar a los clientes a elegir el producto más adecuado a sus necesidades.</li>
                <li>Todos los equipos cuentan con garantía de 12 meses con posibilidad de extensión hasta 36 meses.</li>
                <li>Todos los procesos en nuestra fábrica se encuentran certificados bajo norma ISO 9001:2015.</li>
                <li>Distribución a todos los puntos del país.</li>
                <li>Servicio post venta telefónico tanto para el reseller como para el usuario final.
                </li>
              </ul>
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInLeft' className='scrollImgServicios'>
            <img className='imgServicios' src={process.env.PUBLIC_URL + `/imagenes/imagenes-nosotros/3_servicios.jpg`} alt="" />
          </AnimationOnScroll>
        </div>

        <div className='contenedorAboutAcontecimientos mt-3'>
          <AnimationOnScroll className='parrafoAcontecimientos' animateIn='animate__fadeIn animate__delay-2s'>
            <p>
              <br /><strong>Nuestros acontecimientos</strong> <br />
              <ul className='ulParrafos'>
                <li>Participamos en diversas exposiciones tecnológicas orientadas al mundo gamer (Gamergy, Argentina Game Show, Tecnópolis, Comic-Con, etc.)</li>
                <li>Participamos en eventos orientados al mundo corporativo (Pulso IT, Econ-Ar, Channel Talks, etc.)</li>
                <li>Inauguramos nuestra fábrica en EEUU en el año 2022.</li>
              </ul>
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInRight animate__delay-2s' className='scrollImgAcontecimientos'>
            <img className='imgAcontecimientos' src={process.env.PUBLIC_URL + `/imagenes/imagenes-nosotros/4_acontecimientos.jpg`} alt="" />
          </AnimationOnScroll>
        </div>

        <p className='animate__animated  animate__fadeInUpBig'>



          <br /><strong>Nuestros partners</strong> <br />
          Todos nuestros equipos cuentan con productos de las marcas más prestigiosas del mercado.
          {/* *poner banner con logo de estas marcas* */}
          <FlexMarcasNosotros />
        </p>
      </div>

    </div>
  )
}

export default Nosotros