import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/cart";

import { current } from "@reduxjs/toolkit";

declare interface CartState {
  items: CartItemType[];
  selectedItems: CartItemType[];
  order: CartItemType[];
}

const initialState: CartState = {
  items: [],
  selectedItems: [],
  order: [],
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
      const item = state.items.find((i) => i.cartProductId === cartProductId);
      if (item) {
        item.amount = amount;
      }

      const selectedItem = state.selectedItems.find(
        (selected) => selected.cartProductId === cartProductId
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

    // 장바구니 리셋 테스트
    deleteOrderedItems: (state, action: PayloadAction<CartItemType[]>) => {
      console.log("Current items in cart:", current(state).items); // 수정된 부분
      const orderedItemIds = action.payload.map((item) => item.productId);
      state.items = state.items.filter(
        (item) => !orderedItemIds.includes(item.productId)
      );
      state.selectedItems = state.selectedItems.filter(
        (item) => !orderedItemIds.includes(item.productId)
      );
      console.log("Items after deletion:", current(state).items); // 수정된 부분
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

  deleteOrderedItems,
} = cartSlice.actions;

export default cartSlice.reducer;
