
import './ItemCount.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [showContinueButton, setShowContinueButton] = useState(false);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
    if (quantity > 0) {
      setShowContinueButton(true);
    }
  };

  return (
    <div className='Conteiner'>
      <div className='Controls'>
        <button className='Button btn btn-secondary' onClick={decrement}>-</button>
        <h3 className='Number'>{quantity}</h3>
        <button className='Button btn btn-secondary' onClick={increment}>+</button>
      </div>
      <div className='Agregarbtn'>
        <button className='Button btn btn-secondary' onClick={handleAddToCart} disabled={stock <= 0}>Agregar</button>
        {showContinueButton && (
          <Link to="/" className='ContinueShopping btn btn-secondary'>Seguir comprando</Link>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
