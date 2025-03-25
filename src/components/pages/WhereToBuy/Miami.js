import React from 'react'
import { Container, Card } from 'react-bootstrap'
import "./MiamiStyle.css"

export const Miami = () => {
  return (
    <Container>
        <hr/>
        <h2 className='tituloMiami'>Where to buy in Miami</h2>

        <Card className="cardMiami">
            <div style={{ width: '25rem' }}>
                <Card.Img variant="top" src="https://www.nsx.com.ar/images/tiendas/shopNow_logo.png" />
                <Card.Body>
                    <Card.Title>SHOPNOW LLC</Card.Title>
                    <Card.Text>
                    <b>Agent Adress: </b>7500 NW 25TH STEET, MIAMI, FL 33122 <br/>
                    <b>Web Page: </b> <a href='https://www.shopnowstore.com'>Go to the store</a> <br/>
                    <b>Monday to Friday from 9 a.m to 6 p.m</b>
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>

    </Container>
  )
}

