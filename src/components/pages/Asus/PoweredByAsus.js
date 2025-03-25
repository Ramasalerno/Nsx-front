import React from 'react'
import './PoweredByAsus.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const PoweredByAsus = () => {
  const banner = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/WEB-BANNER-PBA-1920x600px.jpg'
  const logoasus = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/power_by_asus_CW.png'
  const tecnico = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/IconsWhite-01-min.png'
  const garantia = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/IconsWhite-02-min.png'
  const compu = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/IconsWhite-03-min.png'
  const elite = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/rog-logo.webp'
  const compuMuestra1 = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/compuMuestra1.png'
  const compuMuestra2 = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/compuGamer2.png'
  const compuMuestra3 = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/compuGamer3.png'
  const compuMuestra4 = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/compuGamer4.png'
  const compuMuestra5 = process.env.PUBLIC_URL + '/imagenes/imagenes-asus/compuGamer5.png'

  const computadoras = [
    {
      id: '1',
      name: 'Pc Nsx R3 3200g 8gb Ram 256gb Ssd Kit',
      link: 'https://www.nsx.com.ar/MLA-1547864510-pc-de-oficina-nsx-by-asus-r3-3200g-8gb-ram-256gb-ssd-kit-_JM#position=18&search_layout=grid&type=item&tracking_id=29c00020-73cf-4435-96e5-727928b364a5',
      image: compuMuestra1,
      precio: '$447.999'
    },
    {
      id: '2',
      name: 'Pc Nsx Gaming By Asus R5 5500 16gb Ram 240gb Ssd Gtx1650',
      link: 'https://www.nsx.com.ar/MLA-1393558777-pc-nsx-gaming-by-asus-r5-5500-16gb-ram-240gb-ssd-gtx1650-_JM#position=1&search_layout=stack&type=item&tracking_id=2c517746-313c-4dfd-b489-32222fa7232f',
      image: compuMuestra2,
      precio: '$1.511.014'
    },
    {
      id: '3',
      name: 'Pc Nsx Gaming By Asus R5 5600x Rx 6500xt 16gb Ram 240gb Ssd',
      link: 'https://www.nsx.com.ar/MLA-1393583127-pc-nsx-gaming-by-asus-r5-5600x-rx-6500xt-16gb-ram-240gb-ssd-_JM#position=2&search_layout=stack&type=item&tracking_id=542293ba-fc7d-4b10-96f6-08177c7ff86a',
      image: compuMuestra3,
      precio: '$1.506.249'
    },
    {
      id: '4',
      name: 'Pc Nsx Gaming By Asus Intel I5 13f 16gb Ram 480gb Ssd Rx7600',
      link: 'https://www.nsx.com.ar/MLA-1547901314-pc-nsx-gaming-by-asus-intel-i5-13f-16gb-ram-480gb-ssd-rx7600-_JM#position=4&search_layout=stack&type=item&tracking_id=46b079f6-83f4-4ce1-96de-72f8a964a023',
      image: compuMuestra4,
      precio: '$1.762.499'
    },
    {
      id: '5',
      name: 'Pc Nsx Gaming By Asus Intel I7 13k 16gb Ram 1tb Ssd 4070ti',
      link: 'https://www.nsx.com.ar/MLA-1393583959-pc-nsx-gaming-by-asus-intel-i7-13k-16gb-ram-1tb-ssd-4070ti-_JM#position=3&search_layout=stack&type=item&tracking_id=16598885-7982-4c23-9937-ed19eaae8386',
      image: compuMuestra5,
      precio: '$3.749.999'
    }
  ]


  return (
    <div className='fondoNegro'>
      <img style={{ 'width': '100%' }} src={banner} alt="Imagen banner"></img>
      <div className='container text-light fondoAsus'>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className='text-center contenedorCompuMuestra'>
            {computadoras.map((item) => (
              <div className='compuMuestra' key={item.id}>
                <img src={item.image} alt={item.name} className='imgCompuMuestra' />
                <h5>{item.name}</h5>
                <h5>{item.precio}</h5>
                <a className='btnCompuMuestra' href={item.link}>
                  COMPRAR
                </a>
              </div>
            ))}
          </div>
        </AnimationOnScroll>
        <div id='queEsPoweredByAsus'>
          <img src={logoasus} alt="" className='p-5' />
          <div className='my-5'>
            <h3 className='tituloRojo mb-4'>¿Qué es POWERED BY ASUS?</h3>
            <p>
              <strong><span style={{ fontSize: "18px", color: "white" }}>Powered by ASUS</span></strong> trae para ti a los expertos en integración de hardware para PC de alto rendimientopara entregar un set up personalizado, con componente del líder en la industria: ASUS es la marca número uno en el mundo de tarjetas madre y monitores gamer. <br /> <br />
              PBA resulta una selección minuciosa de componente que no solo incluye tarjetas madre sino tarjetas grágica, gabinetes, fuentes de poder y enfriamientos todo en uno, adempas de los complementos perfectos para tu estación de trabajo/juego como monitores, periféricos y routers, dando como resultado un equipo ideal para los más exigentes.
            </p>
          </div>
        </div>

        <div>
          <h3 className='tituloRojo text-center mb-5'>¿POR QUÉ ELEGIR UN EQUIPO PBA?</h3>
          <div className='porQueElegirPBA'>
            <div className='contenedorImgEquiposPBA'>
              <img src={tecnico} alt="" className='imgElegirEquipoPBA' />
              <p>Creados por manos de expertos, solo los mejores constructores de PC´s proveen equipos PBA.</p>
            </div>
            <div className='contenedorImgEquiposPBA'>
              <img src={garantia} alt="" className='imgElegirEquipoPBA' />
              <p>Sello PBA emitido por ASUS garantizando que tu quipo cuente con los mejores componentes, un ensamblado profesional y las pruebas necesarias para entregarte un set up con calidad certificada.</p>
            </div>
            <div className='contenedorImgEquiposPBA'>
              <img src={compu} alt="" className='imgElegirEquipoPBA' />
              <p>Eleva tu set up, con PBA puedes actualizar cualquier componente sin perder la esencia de tu construcción.</p>
            </div>
          </div>
        </div>

        <div id='premiosAsusRog'>
          <img src={elite} alt="" className='p-5' />
          <div className='my-5'>
            <h3 className='tituloRojo mb-4'>¡INCREÍBLES PREMIOS ROG!</h3>
            <p>
              <strong><span style={{ fontSize: "18px", color: "white" }}>Los equipos PBA</span></strong> ensamblados con componentes ROG y ROG Strix participan en nuestro programa de incentivos ROG Rewards, por cada producto ROG o ROG Strix incluido en tu equipo PBA ganas puntos los cuales puedes canjear por Giveaways exclusivos de la marca, desde gorras hasta accesorios ROG para complementar tu ecosistema Gamer, ¡Registrate y empieza a disfrutar de los beneficios de ROG Rewards! <br />
              <a href="https://rog.asus.com/elite/">rog.asus.com</a> <br />
              <p>*Consulta las bases y productos participantes.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoweredByAsus