import "./Item.css";

import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
const Item = ({pelicula, cantAgregada}) => {
    return (
        <>
        <Link className="link" to={(`/item/${pelicula.id}`)}>
            <div className="itemMovie">
                <div className="posterDivFather">
                    <div className="posterDiv">
                        <img src={pelicula.img} className="posterMovie" />
                    </div>
                    <li>{pelicula.name}</li>
                    <p>Calidad: Blu-Ray</p>
                    <p>{cantAgregada ? "Cantidad" : "En Stock"}:{" "}
                                {cantAgregada || pelicula.stock}</p>
                </div>
                <h2 className="price"> ${cantAgregada ? pelicula.price * cantAgregada : pelicula.price}</h2>
            </div>
        </Link>
        </>
    )
}

export default Item;