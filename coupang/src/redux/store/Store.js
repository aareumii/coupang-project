// store.ts
import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../slice/productSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        // 다른 리듀서 추가
    },
});

export default store;
