import "./ItemCount.css";
import 'react-toastify/dist/ReactToastify.css';
const ItemCount = ({count, suma, resta, stock}) =>{
    return(
        <>
        <div className="containerItem">
            <p>Stock: {stock}</p>
            <div className="containerCount">
                <button className="bt-" onClick={resta}> - </button>
                <p> {count} </p>
                <button className="btSum" onClick={suma}> + </button>
            </div>
        </div>
        </>

    );

}

export default ItemCount;
