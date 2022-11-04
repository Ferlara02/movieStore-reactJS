import { CartIcon } from "../assets/icons/cartIcon";

function CartWidget(){
    let numberChart = 4;
    return(
        <div className="cartWidget">
            <CartIcon className="chart" />
            <p>{numberChart}</p>
        </div>
    );
}
export default CartWidget;