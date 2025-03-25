import React from "react";
import { Container } from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const ProductsMapDestacados = ({product}) =>{

    const handleClick = (url) => {
        window.location=url;
    }
    
    return(
        <Container className='mt-5 t'>
            <AnimationOnScroll animateIn="animate__bounceIn">
            <h2 className="titleProduct">PCS DE OFICINA</h2>
            </AnimationOnScroll>
            <div className='cp'>
                
                {product.map( (article) =>(
                    <div className="cardOffice my-5" key={article.id}>
                        <div className="cardOffice-details">
                            <img src={article.img} className="imagenListProduct img-resposive" alt="img Product" />
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

