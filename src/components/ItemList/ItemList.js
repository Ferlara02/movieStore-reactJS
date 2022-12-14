import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({peliculas2}) => {
    return(
        <ul className="itemList">
            {peliculas2.map((pelicula) => (
                <Item pelicula={pelicula}/>    
            ))}
        </ul>
    )
}

export default ItemList;