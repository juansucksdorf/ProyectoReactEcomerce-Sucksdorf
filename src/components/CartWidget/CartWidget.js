import cart from "./assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-conteiner">
      <div>
        <img src={cart} alt="Cart-widget" />
      </div>
      <h4 className="NumeroCart">0</h4>
    </div>
  );
};
export default CartWidget;
