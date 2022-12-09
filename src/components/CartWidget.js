import { CartIcon } from "../assets/icons/cartIcon";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../context/cartContext";
import { useContext} from "react";
function CartWidget(){
    const {carrito} = useContext(Context);
    const navigate = useNavigate();
    let numberChart = 4;
    function handleCart() {
        navigate("/cart");
    }
    return(
        <div className="cartWidget" onClick={handleCart}>
            <CartIcon className="chart" />
            <p>{carrito.length}</p>
        </div>
    );
}
export default CartWidget;