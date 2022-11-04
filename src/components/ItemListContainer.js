function ItemListContainer({greetings = "Bienvenidos a la tienda!"}){
    return(
        <h1 className="greeting">{greetings}</h1>
    );
}

export default ItemListContainer;