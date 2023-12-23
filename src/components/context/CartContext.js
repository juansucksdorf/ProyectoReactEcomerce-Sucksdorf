import React, { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext({ cart: [] });

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0); 

  const addProduct = (product, quantity) => {
    if (!isInCart(product.id)) {
      setCartList((prev) => [...prev, { ...product, quantity }]);
    } else {
      setCartList((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  const isInCart = (productId) => {
    return cartList.some((product) => product.id === productId);
  };

  const totalPrice = useCallback(() => {
    return cartList.reduce((prev, current) => prev + current.quantity * current.price, 0);
  }, [cartList]);

  const calculateTotalQuantity = useCallback(() => {
    return cartList.reduce((accumulator, product) => accumulator + product.quantity, 0);
  }, [cartList]);

  const removeProduct = (id) => {
    const updatedCart = cartList.filter((product) => product.id !== id);
    setCartList(updatedCart);
  };

  useEffect(() => {
    const total = totalPrice();
    const totalQuantity = calculateTotalQuantity();
  
    setTotal(total);
    setTotalQuantity(totalQuantity);
  }, [cartList, totalPrice, calculateTotalQuantity]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        clearCart,
        removeProduct,
        total,
        totalQuantity, 
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
