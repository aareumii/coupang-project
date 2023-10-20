import { configureStore, combineReducers } from "@reduxjs/toolkit";
<<<<<<< HEAD
import cartReducer from "../slice/cartSlice";
import { sessionStorageMiddleware } from "../slice/sessionStorageMiddleware";

export const rootReducer = combineReducers({
=======
import thunk from "redux-thunk";
import cartReducer from "../slice/cartSlice";
import { sessionStorageMiddleware } from "../slice/sessionStorageMiddleware";
import productSlice from "../slice/productSlice";

export const rootReducer = combineReducers({
  product: productSlice,
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
<<<<<<< HEAD
    getDefaultMiddleware().concat(sessionStorageMiddleware),
=======
    getDefaultMiddleware().concat(thunk, sessionStorageMiddleware),
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
