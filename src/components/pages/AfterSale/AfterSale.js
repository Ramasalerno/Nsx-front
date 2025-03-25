import React from 'react'
import "./AfterSaleStyle.css"
import { Container, Card, Button } from 'react-bootstrap'

export const AfterSale = () => {
  return (
    <div  className='contenedorAfterSale'>

        <Container >
            <h2 className='tituloGarantia mt-3 mb-3'>Garantía</h2> <hr/>
            <p>12 meses en todos y cada uno de nuestros artículos <br/></p>
            
            <p>Tanto para usuarios finales como para re-seller, NSX brinda 1 año de garantía de fábrica, período en el que avala todo recambio de componentes de hardware defectuosos.<br/></p>
            <hr/>


            <div className="cardAfterSale my-5">
                <div>
                    <Card style={{ width: '25rem' }} className='contMobile' >
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/imagenes/afterSale/Warranty.png"} />
                        <Card.Body>
                            <Card.Title>Descarga la Garantía de tu NSX:</Card.Title>
                            <Button variant="primary" download style={{ width: '100%' }} href={`${process.env.PUBLIC_URL}/catalogo/Certificado_GARANTIA_NSX.pdf`} target='_blank' rel="noreferrer">Warranty</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '25rem' }}className='contMobile' >
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/imagenes/afterSale/Directives.png"} />
                        <Card.Body>
                            <Card.Title>Descarga las Directivas de Pixeles:</Card.Title>
                            <Button variant="primary" style={{ width: '100%' }} download href={`${process.env.PUBLIC_URL}/catalogo/Directivas_PIXELES_NSX.pdf`} target='_blank' rel="noreferrer">Directives</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            
             
        </Container>

    </div>
  )
}
