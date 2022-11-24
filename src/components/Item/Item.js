import "./Item.css";

import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
const Item = ({pelicula}) => {
    
    return (
        <>
        <Link className="link" to={pelicula.link} >
            <div className="itemMovie">
                <img src={pelicula.img} className="posterMovie" />
                <li>{pelicula.name}</li>
                <p>Calidad: Blu - ray</p>
                <p>Precio: ${pelicula.price}</p>
            </div>
        </Link>
        </>
    )
}

export default Item;