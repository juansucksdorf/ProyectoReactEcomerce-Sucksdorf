import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { getProductsById } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const { name, img, category, description, price, stock } = product;

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>Categoría: {category}</p>
        <p className='Info'>Descripción: {description}</p>
        <p className='Info'>Precio: ${price}</p>
      </section>
      <footer className='ItemFooter'>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)} />
      </footer>
    </article>
  );
};

export default ItemDetail;
