import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { createOrder, generateOrderID } from '../services/orderService'
import './Checkout.css';

const Checkout = () => {
  const { cartList, clearCart, total } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderID = generateOrderID();

    const orderDetails = {
      orderID,
      name: formData.name,
      email: formData.email,
      address: formData.address,
      items: cartList,
      total: total,
     
    };

    try {
      await createOrder(orderDetails);
      clearCart();
      console.log('Pedido completado:', orderDetails);
    } catch (error) {
      console.error('Error al completar el pedido:', error);
    }

    console.log('Información del formulario:', formData); 
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="address">Dirección de Envío:</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <button type="submit">Completar Pedido</button>
      </form>
      <div>
        <h3>Resumen del Pedido</h3>
        <ul>
          {cartList.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Total a pagar: ${total}</p>
      </div>
    </div>
  );
};

export default Checkout;
