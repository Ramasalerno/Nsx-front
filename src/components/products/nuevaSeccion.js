import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsMap } from "./productsMap";
import { RequestProducts } from '../helpers/requestDataProducts'
import './ProductStyle.css'


export function ProductsInicio (){
    const [ product, setProduct ] = useState([])
    const { catMarca } = useParams()

/* Function to validate the product, matching the category property with the url  */
        useEffect( ()=>{
            RequestProducts()
                .then( (res) =>{
                    if (!catMarca) {
                        setProduct(res)
                    } else {
                        // eslint-disable-next-line eqeqeq
                        setProduct( res.filter( prod => prod.ProcessorBrand == catMarca))
                    }
        }) 
}, [catMarca])
    return(
        <>
            {<ProductsMap product={product}/>}
        </>
    )
}