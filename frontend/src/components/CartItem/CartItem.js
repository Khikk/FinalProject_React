import React from 'react';
import s from './CartItem.module.css';
import { base_url } from '../..';

const CartItem = ({ item, handleRemove, handleAdd, handleUpdateQuantity }) => {
    const base_img_url = base_url + '/'+ item.image
    
  return (
    <div className={s.cartItem}>
      <img src={base_img_url} className={s.productImage} />
      <div>
        <h2>{base_url + '/' + item.title}</h2>
        <p className={s.price_cart}> ${item.price}</p>
        <div className={s.counter}>
          <button onClick={() => handleRemove(item)}>-</button>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => handleUpdateQuantity(item, e.target.value)} 
          />
          <button onClick={() => handleAdd(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
