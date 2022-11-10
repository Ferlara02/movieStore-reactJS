import { useState } from "react";
import "./ItemCount.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ItemCount = ({initial, onAdd}) =>{

    const [stock, setStock] = useState(8);

    const [count, setCount] = useState(initial);

    const resta = ()=>{
        if(count > 1) { setCount(count -1); }
    }

    const suma = ()=>{
        if(stock > count) { setCount(count + 1);}
    }
    const agregaAlCarrito = ()=>{
        if(stock >= count){
            onAdd(count);
            setStock(stock - count);
            setCount(1);
        }else{
            toast.error('No hay más stock!', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); 
        }
    }

    return(
        <>
        <div className="containerItem">
            <h1>Pelicula</h1>
            <p>Stock: {stock}</p>
            <div className="containerCount">
                <button className="bt-" onClick={resta}> - </button>
                <p> {count} </p>
                <button className="btSum" onClick={suma}> + </button>
            </div>
            <button className="btAgrega" onClick={agregaAlCarrito}>Agregar al carrito</button>
        </div>
        <ToastContainer />
        </>

    );

}

export default ItemCount;
