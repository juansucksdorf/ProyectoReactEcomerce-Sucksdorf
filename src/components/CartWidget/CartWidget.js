import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import cart from './assets/cart.svg';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/Cart" className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={cart} alt="Cart" className="CartIcon" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
