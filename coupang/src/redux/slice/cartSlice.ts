// cartSlice.ts: setDirectOrder만 확인하시면 될 것 같습니다!

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/types";
import { Product } from './productSlice'; 

declare interface CartState {
  items: CartItemType[];
  selectedItems: CartItemType[];
  order: CartItemType[];
  cart: Product[];

}

const initialState: CartState = {
  items: [],
  selectedItems: [],
  order: [],
  cart: [],

};

const allAvailableItemsSelected = (state: CartState) => {
  const availableItems = state.items.filter(
    (item) => item.amount <= item.stockQuantity
  );
  return availableItems.every((item) =>
    state.selectedItems.some(
      (selectedItem) => selectedItem.productId === item.productId
    )
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setDirectOrder: (state, action: PayloadAction<CartItemType>) => {
      state.order = [action.payload];
    },
    setItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.items = action.payload;
    },
    resetOrder: (state) => {
      state.order = [];
    },
    toggleSelectItem: (state, action: PayloadAction<CartItemType>) => {
      const currentItem = action.payload;
      const existingItem = state.selectedItems.find(
        (item) => item.productId === currentItem.productId
      );

      if (existingItem) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item.productId !== currentItem.productId
        );
      } else {
        state.selectedItems = [...state.selectedItems, currentItem];
      }
    },
    toggleSelectAll: (state) => {
      if (allAvailableItemsSelected(state)) {
        state.selectedItems = [];
      } else {
        state.selectedItems = state.items.filter(
          (item) => item.amount <= item.stockQuantity
        );
      }
    },
    updateItemAmount: (
      state,
      action: PayloadAction<{ cartProductId: number; amount: number }>
    ) => {
      const { cartProductId, amount } = action.payload;
      const item = state.items.find((i) => i.productId === cartProductId);
      if (item) {
        item.amount = amount;
      }
      const selectedItem = state.selectedItems.find(
        (selected) => selected.productId === cartProductId
      );
      if (selectedItem) {
        selectedItem.amount = amount;
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },
    deleteSelected: (state) => {
      const selectedItemIds = state.selectedItems.map((item) => item.productId);
      state.items = state.items.filter(
        (item) => !selectedItemIds.includes(item.productId)
      );
      state.selectedItems = [];
    },
    resetSelectedItems: (state) => {
      state.selectedItems = [];
    },
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const existingProduct = state.cart.find(
          item => item.id === action.payload.product.id
      );
      if (existingProduct) {
          existingProduct.amount += action.payload.quantity;
          existingProduct.price += action.payload.product.price * action.payload.quantity;
      } else {
          const newProduct = {
              ...action.payload.product,
              amount: action.payload.quantity,
              price: action.payload.product.price * action.payload.quantity
          };
          state.cart.push(newProduct);
      }
  },
  
  },
});

export const {
  setDirectOrder,
  setItems,
  resetOrder,
  toggleSelectItem,
  toggleSelectAll,
  updateItemAmount,
  deleteItem,
  deleteSelected,
  resetSelectedItems,
  addToCart
} = cartSlice.actions;

export default cartSlice.reducer;
