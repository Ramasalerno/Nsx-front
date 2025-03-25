import { Preconfigurados } from "../DB/Preconfigurado";

export function RequestPreconfigurados(){
    return new Promise((res, reject) => {
        setTimeout(() => {
            res(Preconfigurados)
        }, 1500);
    })
}