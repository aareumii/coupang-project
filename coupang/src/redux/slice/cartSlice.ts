import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/types";
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

const initialState: CartState = {
  items: [],
  selectedItems: [],
  order: [],
  cart: [],
};

export const addProductToCart = createAsyncThunk(
  'cart/addToCart',
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
        return thunkAPI.rejectWithValue(error.message || "장바구니 추가에 실패했습니다.");
      } else {
        return thunkAPI.rejectWithValue("장바구니 추가에 실패했습니다.");
      }
    }
  }
);

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
    updateItemAmount: (state, action: PayloadAction<{ cartProductId: number; amount: number }>) => {
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
    resetOrder,
    toggleSelectItem,
    updateItemAmount,
    addToCart
  } = cartSlice.actions;
  
  export default cartSlice.reducer;
  