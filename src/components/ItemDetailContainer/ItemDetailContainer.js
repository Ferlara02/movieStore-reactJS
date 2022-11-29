import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import { peliculas } from "../../mocks/item.mock";
import { useParams } from "react-router-dom";



function ItemDetailContainer(){
    const [detailPeliculas, setDetailPeliculas] = useState({});
    const [hayPeliculas, setHayPeliculas] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        new Promise((resolve, reject) => setTimeout(()=> {
            resolve(peliculas)
        }, 2000))
            .then((data) => {
                const movie = data.find((pelicula) => pelicula.id === parseInt(id));
                setDetailPeliculas(movie);
            })
            .then((data) => {
                setHayPeliculas(!data);
            })
    }, [id]);

    return (
        !hayPeliculas ? 
            <div className="spinner"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span>
            </Spinner></div> : <ItemDetail detailPeliculas={detailPeliculas} />
         
       
    )

}

export default ItemDetailContainer;