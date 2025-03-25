import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RequestProductsGaming } from "../helpers/requestDataProductos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";


export function AccesoriosSueltos() {
  const [stockAccesorios, setstockAccesorios] = useState([]);
  const { filtradoCategoria } = useParams();

  
  useEffect(() => {
    RequestProductsGaming()
    .then((res) => {
      if (!filtradoCategoria) {
        setstockAccesorios(res);
      } else {
        setstockAccesorios(res.filter((product) => product.category === filtradoCategoria));
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }, [filtradoCategoria]);
  
  return (

    <>
    <Container className='my-5 t'>
            <h1 className="titleProduct">NUESTROS PRODUCTOS</h1>
            <div className='cp'>
                
                {stockAccesorios.map( (article) =>(
                    <div key={article.id}>
                        <Card className="cardListProduct mt-5 mb-5">
                            <Card.Img variant="top" src={article.img} className="imagenListProduct" alt="img Product" />
                            <Card.Body className="cardBodyProduct">
                                
                                <div>
                                    <Card.Title className="tituloListProduct my-0">{article.id}</Card.Title>
                                </div>


                                <div className="contenedorButtonListProduct">
                                    <a href={article.url}>
                                        <Button className="buttonBuyItNow mt-3">Comprar ahora</Button>
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }
            </div>
        </Container>

    </>
  );
}
