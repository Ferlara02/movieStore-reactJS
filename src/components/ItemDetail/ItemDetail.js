import "./IDC.css"
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/cartContext";
function ItemDetail({movie}){
    const {addMovie, isInCart, carrito} = useContext(Context);
    const navigate = useNavigate();
    const [stock, setStock] = useState(movie.stock);
    const [count, setCount] = useState(1);
   
    const resta = ()=>{
        if(count > 1) { setCount(count - 1); }
    }
    const suma = ()=>{
        if(stock > count) { setCount(count + 1);}
    }
    const agregaAlCarrito = ()=>{
        if(stock >= count){
            onAdd(count);
            addMovie(movie, count);
            setStock(stock - count);
            setCount(1);
        }else{
            toast.error('No hay más stock!', {
                position: "bottom-right",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); 
        }
    }
    function handleCart() {
        navigate("/cart");
    }
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
    return(
        <>
        <div className="itemDetail">
            <div className="backgroundIMG">
                <img src={movie.background} />
            </div>
            <div className="posterAndTitle">
               <img src={movie.img} className="posterMovie2"/>
               <h1> {movie.name} </h1>
               <p>Género: {movie.genre.toUpperCase()}</p>
               <p>Director: {movie.director}</p>
            </div>
            <div className="descriptionAndItemcount">
                <p>{movie.description}</p>
                <p>Precio: ${movie.price}</p>
                {stock > 0 ? (<ItemCount count={count} suma={suma} resta={resta} stock={stock}/>): (<p>No hay mas stock!</p>) }
                
                <button className="btAgrega" onClick={agregaAlCarrito} disabled={stock === 0}>Agregar al carrito</button>
                <button disabled={!isInCart(movie.id)} className="btFinaliza" onClick={handleCart}>Finalizar Compra</button>
            </div>
        </div>
        <ToastContainer />
        </>
    )

}
export default ItemDetail;