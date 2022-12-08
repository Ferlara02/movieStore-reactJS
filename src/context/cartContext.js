import { createContext, useState } from "react";

export const Context = createContext([]);

export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    function isInCart(movieId) {
        return Boolean(carrito.find((movie) => movie.movie.id === movieId));
    }

    function addMovie(movie, cant) {
        const estaAgregado = isInCart(movie.id);
        if(estaAgregado) {
            alert("Producto ya agregado")
        }else{
            setCarrito((prevState) => prevState.concat({movie, cantAgregada: cant}));
        }
    }

    function removeMovie(movieId) {
        setCarrito(carrito.filter((movie) => movie.movie.id !== movieId));
    }

    function clear() {
        setCarrito([]);
    }

    return (
        <Context.Provider value={{isInCart, addMovie, removeMovie, clear, carrito}}>
            {children}
        </Context.Provider>
    );
};
