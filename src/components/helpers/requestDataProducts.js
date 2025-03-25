import { Products } from '../DB/Stock'

export function RequestProducts (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(Products)
        }, 0)
    })
}