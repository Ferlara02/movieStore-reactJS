import "./Item.css";
import ItemCount from "../ItemCount/ItemCount.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Item = ({pelicula}) => {
    const onAdd = (count)=>{
        toast.success('Producto agregado al carrito', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        console.log(`Se agregaron ${count} al carrito`)
    }
    return (
        <>
        <div className="itemMovie">
            <img src={pelicula.img} className="posterMovie" />
            <li>{pelicula.name}</li>
            <ItemCount initial={1} onAdd={onAdd} stock={pelicula.stock} />
        </div>

        <ToastContainer />
        </>
    )
}

export default Item;