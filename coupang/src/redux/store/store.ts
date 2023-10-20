import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import { sessionStorageMiddleware } from "../slice/sessionStorageMiddleware";

export const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
