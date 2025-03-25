import React, { createContext } from 'react'

export const ListadoContext = createContext();

export const ListadoProvider = ({children}) => {
	const imagenCategoria = process.env.PUBLIC_URL + "/imagenes/imagenes-configurador/";
    
    let listado = { // TODO: TIPOCOMPONENTE => MINUSCULA
        'motherboard': [],
        'microprocesador': [],
        'cooler': [],
        'ram': [],
        'video': [],
        'disco': [],
        'licencia': [],
        'gabinete': [],
        'mouse': [],
        'teclado': [],
        'auricular': [],
        'fuente': [],
        'monitor': [],
        'silla': [],
        'armado': []
    }

    let listadoResumenCompra = { // PASO ESTE OBJETO PARA GENERAR EL PEDIDO
        'motherboard': [],
        'microprocesador': [],
        'cooler': [],
        'ram': [],
        'video': [],
        'disco': [],
        'licencia': [],
        'gabinete': [],
        'mouse': [],
        'teclado': [],
        'auricular': [],
        'fuente': [],
        'monitor': [],
        'silla': [],
        'armado': []
    }

    let componentesOpcionales = {
        'cooler': [],
        'licencia': [],
        'monitor': [],
        'teclado': [],
        'mouse': [],
        'auricular': [],
        'silla': [],
    }

    let typeDetalle = ["microprocesador", "motherboard", "ram", "disco", "gabinete", "video", "fuente", "armado", "cooler", "licencia", "monitor", "teclado", "mouse", "auricular", "silla"]; //TOD0S LOS COMPONENTES


    const addComponentList = (tipoComponente, componente) => {
        if(tipoComponente === 'fuente') {
            document.querySelector(`#${tipoComponente}`).classList.add("fondo__verde") 
            document.querySelector(`#armado`).classList.add("fondo__verde")
        }else{
            document.querySelector(`#${tipoComponente}`).classList.add("fondo__verde") 
        }
        
        let imagenAReemplazar;
        let rutaImg;
        let ulCategorias;
        if(typeof listado[tipoComponente][0] === "undefined" || listado[tipoComponente].length < 0){ //SI ES EL PRIMERO QUE ELIJO
            listado[tipoComponente].push(componente);
        }else{
            listado[tipoComponente] = [];
            listado[tipoComponente].push(componente);
        }

        //COMPONENTESOPCIONALES ESTA PARA AGREGAR BOTON ELIMINAR AL FINAL DEL RESUMEN
        if(componentesOpcionales[tipoComponente]){
            if(typeof componentesOpcionales[tipoComponente][0] === "undefined" || componentesOpcionales[tipoComponente].length < 0){ //SI ES EL PRIMERO QUE ELIJO
                componentesOpcionales[tipoComponente].push(componente)
            }else{
                componentesOpcionales[tipoComponente] = [];
                componentesOpcionales[tipoComponente].push(componente)
            }
        }

        /* REEMPLAZANDO IMAGEN ACTUAL POR IMAGEN ELEGIDA */
        imagenAReemplazar = document?.querySelector(`.${tipoComponente}Img`); //IMAGEN QUE QUIERO REEMPLAZAR
        imagenAReemplazar?.removeAttribute('src');
        // rutaImg = imagenCategoria + `elegidos/${tipoComponente}Elegido.png`; //RUTA DE LA IMAGEN NUEVA
        rutaImg = componente.Imagen; //RUTA DE LA IMAGEN NUEVA
        imagenAReemplazar?.setAttribute('src', rutaImg);

        /* AGREGANDO LA DESCRIPCION EN LAS CATEGORIAS DE LA COLUMNA IZQUIERDA */
        ulCategorias = document?.querySelector(`#paso_${tipoComponente}`);
        if (ulCategorias !== null) {
            if(componente.Descripcion){
                ulCategorias.innerHTML = `<li id='itemDesc__${componente.Alias}'>${componente.Descripcion}</li>`;
            }
        }
    }
    const ocultarCategoria = (item, param) => {
		if (param === "ArmarDeCero") {
			if ((typeDetalle?.find(componente => componente === item) || item === 'armado') && item !== "microprocesador") {
				return "disabledCategory fondo__rojo";
			} else {
				return "";
			}
		}
	}
    const removeComponentList = (item) => {
        document.querySelector(`#${item.Tipo}`).classList.remove("fondo__verde")
        if(item.Tipo === 'microprocesador'){
            listado.motherboard = [];
        }

        /* SACO ELEMENTO DEL LISTADO */
       // const index = listado[item.Tipo].indexOf(sku => sku === item.Alias);
       // listado[item.Tipo].splice(index, 1)
       // componentesOpcionales[item.Tipo].splice(index, 1) //QUITO ELEMENTO DEL OBJETO DE COMPONENTES LUEGO DEL ARMADO
       listado[item.Tipo] = [];
        componentesOpcionales[item.Tipo] = [];

        /* CAMBIO IMAGEN ELEGIDA POR LA DEFAULT */
        let imagenAReemplazar = document?.querySelector(`.${item.Tipo}Img`); //IMAGEN QUE QUIERO REEMPLAZAR
        imagenAReemplazar?.removeAttribute('src');
        let rutaImg = imagenCategoria + `${item.Tipo}.png`; //RUTA DE LA IMAGEN NUEVA
        imagenAReemplazar?.setAttribute('src', rutaImg);

        /* SACO DESCRIPCION EN LA COLUMNA IZQUIERDA */
        let ulCategorias = document?.querySelector(`#paso_${item.Tipo}`)
        let liCategorias = document?.querySelector(`#itemDesc__${item.Alias}`);
        liCategorias !== null && ulCategorias.removeChild(liCategorias)

    }

    const initialDataListado = () => {
		typeDetalle.forEach((element)=> {
            listado[element] = [];
            if(listadoResumenCompra[element]){
                listadoResumenCompra[element] = []
            } 
        })
	}

    const dataListado = {
        listado,
        addComponentList,
        typeDetalle,
        initialDataListado,
        removeComponentList,
        ocultarCategoria,
        listadoResumenCompra,
        componentesOpcionales
    }

    return(
        <ListadoContext.Provider value={dataListado}>
            {children}
        </ListadoContext.Provider>
    )
    
}