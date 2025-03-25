import React, { useState, useEffect/* , useContext */ } from 'react';
import { Container } from 'react-bootstrap';
import { Loader } from "../../Loader/Loader";
import ArmarDeCero from './ArmarDeCero'
import { Row } from 'react-bootstrap'
// import { MapeoPreconfigurados } from './MapeoPreconfigurados'
// import { PreconfiguradoContext } from './ContextConfigurador/PreconfiguradoContext';
// import { db } from './firebase';
// import {collection, query, getDocs} from 'firebase/firestore';
import './ConfiguradorStyle.css';

export function Configurador() {
    const [loading, setLoading] = useState(false);
    // const { preconfigurados } = useContext(PreconfiguradoContext);
    // const [products, setProducts] = useState([])


	// const getProducts = async () => {
	// 	const q = query(collection(db, 'products'));
	// 	const docs = [];
	// 	const querySnapshot = await getDocs(q);
	// 	querySnapshot.forEach((doc) => {
	// 		docs.push({...doc.data(), id: doc.id})
	// 	});
	// 	setProducts(docs);
	// }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
    		// getProducts();
        }, 1500);
    }, [])

     
    return (
        <>
            {loading
                ? <Loader />
                : <Container fluid>
                    <div className="text-center gamingpc_section_title__NTPKC">
                        {/* <div>Elegi tu pc NSX Gaming</div> */}
                        {/* <div>PCs gamers armadas y testeadas por expertos, recibilas en tu domicilio en 24hs</div>  ES UNA MENTIRA QUE LLEGA EN 24 HS*/}
                        <div>Armá tu pc Gamer con los mejores componentes</div>
                    </div>
                    <Row className="row justify-content-center" id="configurador">
                        <ArmarDeCero/>
                        {/* {products.map((product) => {
                            return (
                                <MapeoPreconfigurados key={product.id} elemento={product} />
                            )
                        })} */}
                    </Row>
                </Container>
            }
        </>
    )
};