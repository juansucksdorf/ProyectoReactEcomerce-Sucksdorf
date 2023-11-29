
import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className='ListGroup'>
      {products.map(prod => (
        <Link key={prod.id} to={`/product/${prod.id}`} className='product-link'>
          <Item {...prod} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
