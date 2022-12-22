import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  Layout from "../components/layout";
import { Context } from "../context/cartContext";
import {addDoc, collection, doc, getFirestore, updateDoc, serverTimestamp} from "firebase/firestore";
import Swal from "sweetalert2";


const Checkout = () =>{
    
    const { carrito, clear} = useContext(Context);
    const navigate = useNavigate();
    let total = 0;
    carrito.forEach(movie => {
       total += (movie.movie.price * movie.cantAgregada);
    });
    
    
    const db = getFirestore();
    const [id2, setId2] = useState("");
    const [status, setStatus] = useState(false);

    // const mostrarAlerta = () => {
    //     Swal.fire({
    //         title: "Compra Finalizada!",
    //         text: `ID de la compra: ${id}`,
    //         icon: "success",
    //         confirmButtonText: "Aceptar"
    //     });
    // }
    const finalizarCompra = (event) => {
        event.preventDefault();

        const nombre = event.target[0].value;
        const telefono = event.target[1].value;
        const mail = event.target[2].value;

        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
          comprador: {nombre, telefono, mail},
          items: carrito,
          total,
          date: serverTimestamp()
        })
        .then(result => setId2(result.id))
        .then(() =>{
            setStatus(true);
        })
        .catch((error) => console.error(error + "eee"))
    }
    useEffect(() => {
        if(status){
            const actualizarStock = (id, stockNuevo) => {
                const updateStock = doc(db, "items", id)
                updateDoc(updateStock, {stock: stockNuevo})
                    .then(() => {
                        clear();
                        Swal.fire({
                            title: "Compra finalizada",
                            text: `ID de la compra: ${id2}`,
                            icon: "success",
                            confirmButtonText: "Aceptar"
                        })
                        navigate("/");
                    })
                    .catch((error) => Swal.fire("Hubo algún error", error, "error"))
            }
            carrito.forEach(movie => {
                actualizarStock(movie.movie.id, (movie.movie.stock - movie.cantAgregada));
            });
        }
    }, [status]);

    return (
        <Layout>
            <div className="checkout">
                <h1>Completa los datos para finalizar la compra.</h1>
                <form onSubmit={finalizarCompra}>
                    <div className="divForm">
                        <input className="input" placeholder="Nombre Completo" required />
                        <input className="input" placeholder="Telefono de contacto" type="number" required/>
                        <input className="input" placeholder="Email" type="email" required/>
                    </div>
                    
                    <p>Total de la compra: <strong>${total}</strong></p>
                    {total === 0 ? (<p>No hay productos en tu carrito.</p>) : (<button type="submit" className="button">Pagar</button>)}
                    
                </form>
            </div>

        </Layout>
    );

}

export default Checkout;