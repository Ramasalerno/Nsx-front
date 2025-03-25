import { Destacados } from '../DB/Destacados'

export function RequestDestacados (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(Destacados)
        }, 0)
    })
}