import React from "react";
import { Container } from 'react-bootstrap'
import '../products/ProductStyle.css'
import SearchBar from "../SearchBar/SearchBar";

export const ProductsMapOffice = ({product}) =>{

    const handleClick = (url) => {
        window.location=url;
    }
   
    return(
        <Container className='my-5 t'>
            <SearchBar />
            <h1 className="titleProduct">NUESTROS PRODUCTOS</h1>
            <div className='cp'>
                
                {product.map( (article) =>(
                    <div className="cardOffice my-5" key={article.id}>
                        <div className="cardOffice-details">
                            <img src={article.img} className="imagenListProductGamer img-resposive" alt="img Product" />
                            <p className="text-body text-center">{article.id}</p>
                        </div>
                        <button onClick={()=>handleClick(article.url)}  className="cardOffice-button buttonBuyItNowPcOffice">Comprar ahora</button>
                    </div>
                ))
            }
            </div>
        </Container>

    )
}

