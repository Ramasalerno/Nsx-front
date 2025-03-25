import { Products } from "../DB/Productos"

export function RequestProductsGaming (){
    
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(Products)
        }, 0)
    })
}