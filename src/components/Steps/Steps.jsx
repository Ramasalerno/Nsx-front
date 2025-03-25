import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import './Steps.css';

function Steps() {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="steps-cont">
        <Container>
          <div className="steps-first">
          <Row>
            <Col md={4} className="pb-3" style={{borderRight:'1px solid black'}}>
                <div className="icono-centrado">
                  <img src="https://i.postimg.cc/0Q29CzfH/tienda.png" alt="img" height={70} />
                </div>
              <h3>Elegí los productos que vas a comprar</h3>
              <h6>
              Si querés más de uno, sumalos a tu carrito.
              </h6>
            </Col>
            <Col md={4} className="pb-3" style={{borderRight:'1px solid black'}}>
            <div className="icono-centrado">
              <img src="https://i.postimg.cc/cL01Jk3S/payment.png" alt="img" height={70} />
            </div>
              <h3>Pagá con el medio de pago que quieras</h3>
              <h6>
              Comprá con seguridad: usamos la tecnología de Mercado Pago.
              </h6>
            </Col>
            <Col md={4} className="pb-3">
            <div className="icono-centrado">
                <img src="https://i.postimg.cc/02LWGhfT/boxicon.png" alt="" height={70} />
            </div>
              <h3>Recibí el producto que esperás</h3>
              <h6>
              Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.
              </h6>
            </Col>
          </Row>
          </div>
          <div className="steps-second">
          <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Body>
              <h6>¿Te arrepentiste de comprar?</h6>
              <a href="" style={{textDecoration:'none'}}><p>Cómo cancelar una compra.</p></a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <h6>¿Conocés las normas que protegen tus compras? </h6>
              <a href="" style={{textDecoration:'none'}}><p>Contratos de adhesión - Ley Nº 24.240 de Defensa del Consumidor</p></a>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </div>
   </Container>
   </div>
      <hr />
    </>
  );
}

export default Steps;