import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";


function ItemDetailContainer(){
    const [movie, setMovie] = useState(null);
    const [hayPeliculas, setHayPeliculas] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemRef = doc(db, "items", id);
        getDoc(itemRef)
            .then((snapshot) => {
                if(snapshot.exists()) {
                    setMovie({id: id, ...snapshot.data()});
                    setHayPeliculas(true)
                }
            })
            .catch(error => console.error(error));
    }, [id]);

    return (
        !hayPeliculas ? 
            <div className="spinner"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span>
            </Spinner></div> : <ItemDetail movie={movie} />
         
       
    )

}

export default ItemDetailContainer;