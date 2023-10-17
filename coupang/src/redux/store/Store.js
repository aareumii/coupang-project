// store.ts
import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../slice/productSlice';
import cartSlice from '../slice/cartSlice';  // 추가


const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice, 
        // 다른 리듀서 추가
    },
});

export default store;
