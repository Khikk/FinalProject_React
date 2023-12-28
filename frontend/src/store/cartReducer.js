
const initialState = {
    items: [],
    total: 0, 
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,items: state.items.filter(item => item.id !== action.payload.id),
          total: state.total - action.payload.price,
        };
        case 'CLEAR_CART':
          return {
            ...state,
            items: [],
            total: 0
          };        
      default:
        return state;
    }
  };
  
  export default cartReducer;  