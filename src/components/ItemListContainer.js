import ItemList from "./ItemList/ItemList.js";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from "react";

const peliculas = [
 {
    id: 1,
    name: "Hara Kiri",
    description: "Japonese classic",
    genre: "Drama",
    img: "https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/66/97/39/18965657.jpg",
    stock: 5 
 },
 {
    id: 2,
    name: "Hour of the Wolf",
    description: "Bergmans classic",
    genre: "Drama, Misterio",
    img: "https://m.media-amazon.com/images/M/MV5BMzdmZjc4MTMtYmQwYy00ZjMwLWE0ODItYjU0NTc0NTVkOTAyXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_.jpg",
    stock: 9 
 },
 {
    id: 3,
    name: "Magnolia",
    description: "PTA classic",
    genre: "Sci Fi, Misterio",
    img: "https://m.media-amazon.com/images/I/51uAv8PDJbL._AC_SY580_.jpg",
    stock: 4 
 }
];


function ItemListContainer(){
    
    const [peliculas2, setPeliculas2] = useState([]);
    const [hayPeliculas, setHayPeliculas] = useState(false);


    const listaPeliculas = new Promise((resolve) => 
        setTimeout(() => {
            resolve(peliculas);
        }, 2000)
    );

    listaPeliculas
        .then((data) => setPeliculas2(data))
        .then((data) => {
            setHayPeliculas(!data)
        })
        //.catch((error) => console.log(error));

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