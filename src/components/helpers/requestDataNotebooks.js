import { Notebooks } from "../DB/Notebooks"

export function RequestProductsNotebooks (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(Notebooks)
        }, 0)
    })
}