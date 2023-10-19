import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/cart";
import { Product } from "./productSlice";
import { fetchAddToCart } from "../../api/getProductApi";

type ProductInCart = Product & {
  amount: number;
  price: number;
};

interface CartState {
  items: CartItemType[];
  selectedItems: CartItemType[];
  order: CartItemType[];
  cart: ProductInCart[];
}

// declare interface CartState {
//   items: CartItemType[];
//   selectedItems: CartItemType[];
//   order: CartItemType[];
// }

const initialState: CartState = {
  items: [],
  selectedItems: [],
  order: [],
  cart: [],
};

export const addProductToCart = createAsyncThunk(
  "cart/addToCart",
  async (product: ProductInCart, thunkAPI) => {
    try {
      const response = await fetchAddToCart(product, product.amount);
      if (response && response.message === "상품을 장바구니에 추가하였습니다") {
        return product;
      } else {
        return thunkAPI.rejectWithValue("장바구니 추가에 실패했습니다.");
      }
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(
          error.message || "장바구니 추가에 실패했습니다."
        );
      } else {
        return thunkAPI.rejectWithValue("장바구니 추가에 실패했습니다.");
      }
    }
  }
);

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
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.amount += action.payload.amount;
        existingProduct.price += action.payload.price * action.payload.amount;
      } else {
        const newProduct = {
          ...action.payload,
          price: action.payload.price * action.payload.amount,
        };
        state.cart.push(newProduct);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.amount += action.payload.amount;
        existingProduct.price += action.payload.price * action.payload.amount;
      } else {
        const newProduct = {
          ...action.payload,
          price: action.payload.price * action.payload.amount,
        };
        state.cart.push(newProduct);
      }
    });
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
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
