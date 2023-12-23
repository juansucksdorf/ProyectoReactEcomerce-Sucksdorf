import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartItem.css"
const CartItem = ({ title, price, id, quantity }) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div>
      <picture></picture>
      <div>
        <h2>{title}</h2>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: {quantity * price}</p>
        <button onClick={() => removeProduct(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
