import { DataDrivers } from '../DB/AllDrivers'

export function RequestProductsDrivers (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(DataDrivers)
        }, 0)
    })
}