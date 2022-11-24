import { useState } from "react";
import "./ItemCount.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ItemCount = ({initial, onAdd, stock}) =>{

    const [stock2, setStock2] = useState(stock);

    const [count, setCount] = useState(initial);

    const resta = ()=>{
        if(count > 1) { setCount(count -1); }
    }

    const suma = ()=>{
        if(stock2 > count) { setCount(count + 1);}
    }
    const agregaAlCarrito = ()=>{
        if(stock2 >= count){
            onAdd(count);
            setStock2(stock2 - count);
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
            <p>Stock: {stock2}</p>
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
