import "./IDC.css"
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';

function ItemDetail({detailPeliculas}){
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
            <div className="posterAndTitle">
               <img src={detailPeliculas.img} className="posterMovie2"/>
               <h1> {detailPeliculas.name} </h1>
               <p>Género: {detailPeliculas.genre}</p>
               <p>Director: {detailPeliculas.director}</p>
            </div>
            <div className="descriptionAndItemcount">
                <p>{detailPeliculas.description}</p>
                <p>Precio: ${detailPeliculas.price}</p>
                <ItemCount initial={1} onAdd={onAdd} stock={detailPeliculas.stock} price={detailPeliculas.price}/>
            </div>
        </div>
        <ToastContainer />
        </>
    )

}
export default ItemDetail;