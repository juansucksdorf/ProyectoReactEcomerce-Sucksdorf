import React, { useState, useEffect, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { getProductsById } from "../../asyncMock";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    getProductsById(productId)
      .then((response) => {
        setProduct(response);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    if (product) {
      addProduct(product, quantity);
    } else {
      console.error('El producto no existe');
    }
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  const { name, img, category, description, price, stock } = product;

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoría: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded === 0 ? (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        ) : (
          <div>
            <Link to="/cart" className="Option">
              Terminar Compra
            </Link>
            <Link to="/" className="Option">
              Continuar comprando
            </Link>
          </div>
        )}
        
      </footer>
    </article>
  );
};

export default ItemDetail;
