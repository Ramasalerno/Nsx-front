import { ProductsOffice } from '../DB/StockOffice'

export function RequestProductsOffice (){
    return new Promise ( (res, reject) => {
        setTimeout( () =>{
            res(ProductsOffice)
        }, 0)
    })
}