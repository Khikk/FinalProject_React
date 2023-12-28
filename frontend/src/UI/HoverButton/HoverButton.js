import React from 'react';
import Button from '../Button/Button';
import s from './HoverButton.module.css';

function HoverButton({ active, setActive, dispatch, productInfo, addToCart }) {
  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productInfo.id,
      name: productInfo.title,
      price: productInfo.discont_price !== null ? productInfo.discont_price : productInfo.price,
      image: productInfo.image
    }));
  };
  return (
    <div className={`${s.hover} ${active && s.active}`}>
      <Button             
            onClick={handleAddToCart}
            title='Add to cart' 
            theme='green' />
    </div>
  );
}

export default HoverButton;
