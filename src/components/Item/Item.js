import "./Item.css";

import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
const Item = ({pelicula, cantAgregada}) => {
    
    return (
        <>
        <Link className="link" to={pelicula.link}>
            <div className="itemMovie">
                <div className="posterDiv">
                    <img src={pelicula.img} className="posterMovie" />
                </div>
                <li>{pelicula.name}</li>
                <p>Calidad: Blu-Ray</p>
                <p>{cantAgregada ? "Cantidad" : "En Stock"}:{" "}
                             {cantAgregada || pelicula.stock}</p>
                <p className="price">Precio: ${cantAgregada ? pelicula.price * cantAgregada : pelicula.price}</p>
            </div>
        </Link>
        </>
    )
}

export default Item;