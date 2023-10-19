import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/cart";

// import { current } from "@reduxjs/toolkit";

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
  },
});

export const {
  setDirectOrder,
  setItems,
  toggleSelectItem,
  toggleSelectAll,
  updateItemAmount,
  deleteItem,
  deleteSelected,
  resetSelectedItems,
} = cartSlice.actions;

export default cartSlice.reducer;
