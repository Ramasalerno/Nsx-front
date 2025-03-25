import React, { useEffect, useState, createContext } from "react";
export const PreconfiguradoContext = createContext();
export const PreconfiguradoProvider = ({ children }) => {

	const [preconfigurados, setPreconfigurados] = useState([]);
	const [detallePreconfig, setDetallePreconfig] = useState([]);
	const [price, setPrice] = useState(0);
	const [counterRam, setCounterRam] = useState(1);
	const [counterDisco, setCounterDisco] = useState(1);

	const url = process.env.REACT_APP_ENDPOINT_ENABLED_COMPONENTS + '/getPreConfigurados/6683';

	useEffect(() => {
		// let isMounted = true;
		obtenerDatos()
			.then((res) => {
				res.map((item, index) => {
					// if(item.Precio === 2500){ /* SI EL PRECONFIGURADO VIENE CON PRECIO 2500 NO LO MUESTRO */
					// 	res.splice(index, 1)
					// }
					return item;
				})  
				setPreconfigurados(res)
			})
			.catch((e) => {
				console.log(e)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const obtenerDatos = async () => {
		const datos = await fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json'
			},
		})
		const dataPreconfigurado = await datos.json()
		return dataPreconfigurado
	}
	const initialData = () => {
		setDetallePreconfig([]);
		setPrice(0) //PRECIO DEL ARMADO
	}

	const sumaPrecios = (precio, listadoPaso, componente, counter) => { //componente SI ES RAM Y DISCO VIENE ARRAY, SINO VIENE EL ALIAS
		let primerComponente = listadoPaso.length === 0

		if(primerComponente){ //ES EL PRIMER COMPONENTE QUE ELIJO
			componente.Tipo === 'fuente' && setPrice(price + 2500) //SUMO EL ARMADO CUANDO SE AGREGA LA FUENTE
			setPrice(price + precio)
			// console.log('PRIMER ARTICULO QUE ELIJO', precio);
			// console.log('EL TOTAL ES ', price + precio);

			
		}else if(listadoPaso[0].Alias !== componente.Alias){  //CAMBIO EL COMPONENTE ELEGIDO ANTES
			//MULTIPLICO PRECIO POR CANTIDAD POR SI ELIJO 4 RAMS/DISCOS PARA RESTAR LOS ARTICULOS ELEGIDOS
			let precioAnterior = (listadoPaso[0].Precio * counter)

			setPrice((price - precioAnterior) + precio)
				
			

			listadoPaso[0].Tipo === 'ram' && setCounterRam(1)
			listadoPaso[0].Tipo === 'disco' && setCounterDisco(1)

			listadoPaso[0].Tipo === 'ram' && setCounterRam(1)

			// console.log('RESTO ', precioAnterior, ' DE', price, ' Y LE SUMO ', precio);
			// console.log('EL TOTAL ES ', price + precio);

		}else if(counter){ //AGREGO MAS CANTIDADES
			
			let precioAnterior = listadoPaso[0].Precio * counter
			setPrice((price - precioAnterior) + precio)
			setPrice(price + precio)
			
			if(componente.Tipo === 'ram'){
				listadoPaso[0].Cantidad = counter + 1
				
			}else if(componente.Tipo === 'disco'){
				listadoPaso[0].Cantidad = counter + 1

			}
		}
	}

	const restaPrecios = (item, listadoPaso, counter) => {
		if(price > 0){
			if(item && listadoPaso && item.Alias === listadoPaso.Alias){
				let restarEstePrecio = (counter * item.Precio)
				setPrice(price - restarEstePrecio)
				if(item.Tipo === 'ram'){
					setCounterRam(1)
				}else if(item.Tipo === 'disco'){
					setCounterDisco(1)
				}
			}else{
				item.Tipo === 'fuente' 
				? setPrice((price - item.Precio) - 2500)
				: setPrice(price - item.Precio) //CUALQUIER PASO QUE NO SEA FUENTE
			}
		}
	}

	const infoDetallePrecioPreconfigurado = (param) => {
		if (param !== "ArmarDeCero") {
			preconfigurados.map((element) => {
				if (element.Alias === param) {
					setDetallePreconfig(element.Comp)
					if (price === 0) {
						setPrice(element.Precio)
					}
				}
				return detallePreconfig
			})
		}
	}

	const ocultarCategoria = (item, param) => {
		if (param !== "ArmarDeCero") {
			if (detallePreconfig?.find(componente => componente.Tipo === item)) {
				return "disabledCategory";
			} else {
				return "";
			}
		}
	}

	const data = {
		preconfigurados,
		setPreconfigurados,
		infoDetallePrecioPreconfigurado,
		detallePreconfig,
		setDetallePreconfig,
		ocultarCategoria,
		price,
		setPrice,
		initialData,
		sumaPrecios,
		restaPrecios,
		counterRam,
		setCounterRam,
		counterDisco,
		setCounterDisco,
	}
	return (
		<PreconfiguradoContext.Provider value={data}>
			{children}
		</PreconfiguradoContext.Provider>
	)

}
