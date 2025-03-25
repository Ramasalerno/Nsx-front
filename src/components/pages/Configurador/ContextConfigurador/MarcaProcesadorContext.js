import React, { createContext, useState } from 'react'
import { db } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';

export const MarcaProcesadorContext = createContext();

export const MarcaProcesadorProvider = ({ children }) => {
    // Búsqueda
    const [busqueda, setBusqueda] = useState('');
    const searchInput = busqueda.toLowerCase().replace(/ /g, '') // Declaro y sanitizo la variable de búsqueda.
    const [loading, setLoading] = useState(false);
    const [datos, setDatos] = useState([])


    /* *********** EMPIEZA LOGICA DE MODAL Y ELECCION DE MARCA */
    const [marca, setMarca] = useState('')
    const [componentes, setComponentes] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClickMarca = (e) => {
        handleShow();
        setMarca(e.target.value);
    }
    const initialDataMarca = () => {
        setMarca('');
        setComponentes('');
    }
    /* *********** TERMINA LOGICA DE MODAL Y ELECCION DE MARCA */

    /* ********** OBTENGO LOS DATOS DE LOS COMPONENTES */
    const [paso, setPaso] = useState('microprocesador')
    const infoDidMount = (/* endpoint,  */componente) => {
        setPaso('')
        // handleClickTraigoComponentes(endpoint);
        handleClickTraigoComponentes(componente);

        setPaso(componente)
    }

    const handleClickTraigoComponentes = async (componente) => {
        const q = query(collection(db, componente));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
        });
        setComponentes(docs)
        setDatos([...docs])
        console.log(datos)
        console.log(componentes)
        return componentes;
        // const url = `${process.env.REACT_APP_ENDPOINT_ENABLED_COMPONENTS}/${endpoint}?idCliente=23105&marca=${marca !== '' && marca}`;
        // const datos = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json'
        //     },
        // })
        // const obtengoDatos = await datos.json();
        // setComponentes(obtengoDatos)

    }
    /* *********************************************** */

    const data = {
        marca,
        setMarca,
        handleClickMarca,
        initialDataMarca,
        infoDidMount,
        componentes,
        setComponentes,
        setShow,
        paso,
        setPaso,
        busqueda,
        setBusqueda,
        searchInput,
        loading,
        setLoading,
        datos,
        setDatos
    }
    return (
        <MarcaProcesadorContext.Provider value={data}>
            {children}
        </MarcaProcesadorContext.Provider>
    )
}