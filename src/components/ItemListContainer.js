import ItemList from "./ItemList/ItemList.js";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import {peliculas} from "../mocks/item.mock";
import {useParams} from "react-router-dom";


function ItemListContainer(){
    const {genre} = useParams();
    const [peliculas2, setPeliculas2] = useState([]);
    const [hayPeliculas, setHayPeliculas] = useState(false);

    useEffect(() => {
        new Promise((resolve) => 
            setTimeout(() => {
                resolve(peliculas);
            }, 2000)
        )
        .then((data) => {
            if(genre){
                const genres = data.filter((pelicula)=> pelicula.genre === genre);
                setPeliculas2(genres);
            }else {
                setPeliculas2(data);
            }
        })
        .then((data) => {
            setHayPeliculas(true);
        })
    }, [genre]);

    return(
        <>
        <div className="main">
            {!hayPeliculas ? 
                <Spinner className="spinner" animation="border" role="status"><span className="visually-hidden">Loading...</span>
                </Spinner> : <ItemList peliculas2={peliculas2} />
            }
        </div>
        </>
    );
}

export default ItemListContainer;