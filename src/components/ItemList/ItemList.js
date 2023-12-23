import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className='ListGroup'>
      {products.map(prod => (
        <div key={prod.id} className='product-link'>
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;