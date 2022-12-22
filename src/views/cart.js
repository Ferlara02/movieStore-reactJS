import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from "../components/Item/Item";
import Layout from "../components/layout";
import {Context}  from "../context/cartContext";
import { TrashMovie } from "../components/TrashMovie";

import { getFirestore, collection, addDoc, doc} from "firebase/firestore";

const CartView = () => {
  const navigate = useNavigate();
  const { carrito, clear} = useContext(Context);
  let total = 0;
  carrito.forEach(movie => {
      total += (movie.movie.price * movie.cantAgregada);
  });

  const db = getFirestore();
  const comprador = {
    nombre: "fer",
    apellido: "kara",
    mail: "aaa@aa"
  };
  


  /***** Funciones DOM *****/
  const handleClear = () => {
    clear();
  }
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () =>{
    setIsHovering(true);
  }
  const handleMouseLeave = () =>{
    setIsHovering(false)
  }
  function hoverClass() {
    return `${isHovering ? "textClear" : "hidden"}`
  }
  /**** ****/

  const handleFinCompra = () => {
    navigate("/checkout");
  };

  

  return (
    <Layout>
      <div className="mainCart">
        {carrito.length === 0 ? (
          <h1>Carrito vacío. Puedes ver nuestras películas <Link to="/">AQUÍ.</Link></h1>
        ) : (
          <div className="container">
                
              {carrito.map((movie) => {
                const cantAgregada = movie.cantAgregada;
                return (
                  <div className="movieContainer">
                    <Item pelicula={movie.movie} cantAgregada={cantAgregada}/>
                    <div className="aside">
                      <TrashMovie itemId={movie.movie.id} />
                    </div>
                  </div>
                );
              })}
            
            <div className="finCompra">
              <p>Total: ${total}</p>
              <button className="button" onClick={handleFinCompra}>Finalizar Compra</button>
            </div>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="clear" onClick={handleClear}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="38px" height="38px">
                <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 8 9 L 10 9 L 10 20 L 8 20 L 8 9 z M 14 9 L 16 9 L 16 20 L 14 20 L 14 9 z"/>
              </svg>
              <p className={hoverClass()}>Vaciar Carrito</p>
            </button>
          </div>
        )}
      </div>
    </Layout>
    
  );
};

export default CartView;