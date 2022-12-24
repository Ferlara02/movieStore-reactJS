import ItemList from "./ItemList/ItemList.js";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {getDocs, getFirestore, collection, query, where} from "firebase/firestore";

function ItemListContainer(){
    const {genre} = useParams();
    const [peliculas2, setPeliculas2] = useState([]);
    const [hayPeliculas, setHayPeliculas] = useState(false);

    
    useEffect(() => {
        const db = getFirestore();
        //Para consultar todos los productos

        const moviesCollection = collection(db, "items");
        //Consultar productos con filtros
        if(genre) {
            const q = query(moviesCollection, where("genre", "==", genre));
            setHayPeliculas(false); //Para que al pasar de una categoría a otra el loading funcione.
            getDocs(q).then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({
                    id: doc.id, 
                    ...doc.data(),
                }))
                setPeliculas2(products);
                setHayPeliculas(true);
            }).catch(error => console.log(error));
        }else {
            getDocs(moviesCollection).then((snapshot) => {
                const products = snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                }));
                setPeliculas2(products);
                setHayPeliculas(true);
            });
        }
    }, [genre]);
    
    return(
        <>
        <div className="main">
            
            {!hayPeliculas ? 
                <div className="spinner"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span>
                </Spinner></div> : <ItemList peliculas2={peliculas2} />
            }
        </div>
        </>
    );
}

export default ItemListContainer;