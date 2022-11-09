import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) =>{

    
    const [count, setCount] = useState(initial);

    const resta = ()=>{
        if(count > 1) { setCount(count -1);}
    }

    const suma = ()=>{
        if(stock > count) { setCount(count + 1);}
    }
    const agregaAlCarrito = ()=>{
        onAdd(count);
    }

    return(
        <>
        <div className="containerItem">
            <div className="containerCount">
                <button className="bt-" onClick={resta}> - </button>
                <p> {count} </p>
                <button className="btSum" onClick={suma}> + </button>
            </div>
            <button className="btAgrega" onClick={agregaAlCarrito}>Agregar al carrito</button>
        </div>
        </>

    );

}

export default ItemCount;
