import React from "react";
import { Container, Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import SearchBar from "../SearchBar/SearchBar";
import './ProductStyle.css'

export const ProductsMap = ({product}) =>{

    const { catMarca } = useParams()

    let amd = "https://raw.githubusercontent.com/RamiroSB/imagenes/main/nsxgamer/amd_banner.jpg"
    let intel = "https://raw.githubusercontent.com/RamiroSB/imagenes/main/nsxgamer/intel_banner_2.jpg"
    


    return(
        <Container className='my-5 t'>
            <SearchBar />
            <h1 className="titleProduct">NUESTROS PRODUCTOS</h1>
            <img src={catMarca === "INTEL" ? `${intel}` : catMarca === "AMD" ? `${amd}` : ""} className="imagenCondicional" alt=""></img>

            <div className='cp'>
                {product.map( (article) =>(
                    <div key={article.id} >
                    <Card className="cardListProduct mt-5 mb-5">
                      <Card.Img variant="top" src={article.img} className="imagenListProduct" alt="img Product" />
                      <Card.Body>
                          
                        <Card.Title className="tituloListProduct">{article.Model}</Card.Title>

                            <div className="contenedorButtonListProduct">
                                <Link to={ `/productsDetails/${article.id}` }>
                                 <Button variant="primary" className="mr-5 buttonMoreInfo">Especificaciones tecnicas</Button>
                                </Link>
                                {/* <Link to="/contact"> */}
                                {/* <a > */}
                                 {/* <Button variant="success" className="buttonBuyItNow" href={article.url} target='_blank' >Comprar ahora</Button> */}
                                {/* </a> */}
                            </div>

                      </Card.Body>
                    </Card>
                </div>
                    )
                )
            }
            </div>
        </Container>

    )
}

