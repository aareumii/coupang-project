const initialState = {
    productInfo: {},
    cart: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      // 다른 액션 핸들러 추가
      default:
        return state;
    }
  };
  
  export default productReducer;
  