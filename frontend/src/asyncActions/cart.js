export const addToCart = (item) => {
    return (dispatch) => {
      dispatch({type: 'ADD_TO_CART',
      payload: item,})
    };
  };
  
  export const removeFromCart = (item) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: item,
    };
  };

  export const clearCart = () => {
    return {
      type: 'CLEAR_CART'
    };
  };
  
  export const updateCartQuantity = (item, quantity) => {
    return {
      type: 'UPDATE_CART_QUANTITY',
      payload: { item, quantity }
    };
  };
  

  export const sendOrder = (orderData) => {
    return async (dispatch) => {
      try {
        const response = await fetch((base_url)+'/order/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Your order has been successfully placed on the website.', data);
        } else {
          throw new Error('Failed to send order');
        }
      } catch (error) {
        console.error('Error sending order:', error);
      }
    };
  };
  