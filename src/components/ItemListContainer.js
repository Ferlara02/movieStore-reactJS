import ItemCount from "./ItemCount/ItemCount.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ItemListContainer({greetings = "Bienvenidos a la tienda!"}){
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
        <h1 className="greeting">{greetings}</h1>
        <ItemCount stock={8} initial={1} onAdd={onAdd} />
        <ToastContainer />
        </>
    );
}

export default ItemListContainer;