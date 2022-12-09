import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item/Item";
import Layout from "../components/layout";
import {Context}  from "../context/cartContext";
import { TrashMovie } from "../components/TrashMovie";
const CartView = () => {
  const navigate = useNavigate();
  

  const { carrito, clear} = useContext(Context);
  const handleFinCompra = () => {
    setTimeout(() => {
      clear();
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };

  let total = 0;
  carrito.forEach(movie => {
      total += (movie.movie.price * movie.cantAgregada);
  });

  return (
    <Layout>
      <div className="mainCart">
        {carrito.length === 0 ? (
          <h1>No has agregado productos.</h1>
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
              <button onClick={handleFinCompra}>Finalizar Compra</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
    
  );
};

export default CartView;