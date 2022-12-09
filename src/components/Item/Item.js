import "./Item.css";

import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
const Item = ({pelicula, cantAgregada}) => {
    
    return (
        <>
        <Link className="link" to={pelicula.link}>
            <div className="itemMovie">
                <img src={pelicula.img} className="posterMovie" />
                <li>{pelicula.name}</li>
                <p>Calidad: Blu-Ray</p>
                <p>Cantidad: {cantAgregada}</p>
                <p className="price">Precio: ${pelicula.price * cantAgregada}</p>
            </div>
        </Link>
        </>
    )
}

export default Item;