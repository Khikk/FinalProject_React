import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  clearCart,
  sendOrder,
  updateCartQuantity
} from '../../asyncActions/cart';
import s from './BasketInfo.module.css'; 
import CartItem from '../CartItem/CartItem';

const BasketInfo = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item));
  };

  const handleSendOrder = () => {
    dispatch(sendOrder({ items: cartItems, total, name, phone, email }));
    setIsModalOpen(true);
    dispatch(clearCart()); // Очистка корзины
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateQuantity = (item, quantity) => {
     dispatch(updateCartQuantity(item, quantity));
  };

  return (
    <div className={s.basketInfoContainer}>
          <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item, index )=> (
        <CartItem 
          key={index} 
          item={item}
          handleRemove={handleRemoveFromCart}
          handleAdd={handleAddToCart}
          handleUpdateQuantity={handleUpdateQuantity}
        />
      ))}
    </div>
      <form className={s.form_cart}>
        <h1 style={{marginRight:'250px', marginBottom:'150px'}}>Order details</h1>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          className={s.inputField}
        />
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Phone"
          className={s.inputField}
        />
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className={s.inputField}
        />
        <button
          type="button"
          onClick={handleSendOrder}
          className={s.sendOrderBtn}
        >
        Order
        </button>
      </form>
      {isModalOpen && (
        <div className={s.modalContent}>
          <div>Thank you for your order!</div>
          <button onClick={closeModal} className={s.closeBtn}>
            <div className={s.close}>Close</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default BasketInfo;
