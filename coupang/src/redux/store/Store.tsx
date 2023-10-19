import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productSlice from '../slice/productSlice';
import cartSlice from '../slice/cartSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        // 다른 리듀서 추가
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
