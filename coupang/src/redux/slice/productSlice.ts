import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';  // createAsyncThunk import 추가
import { addToCartAPI } from '../../api/productApi';

export const addProductToCart = createAsyncThunk(
    'product/addToCart',
    async (product: Product) => {  
      const response = await addToCartAPI(product);
      return response.data;
    }
);

type Product = {
    id: number;
    productName: string;
    price: number;
    amount: number;
};

const initialState = {
    productInfo: {},
    cart: [] as Product[]
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            // 기존 제품 찾기
            const existingProduct = state.cart.find(
                item => item.id === action.payload.id
            );
            if (existingProduct) {
                // 제품의 수량 및 가격 업데이트
                existingProduct.amount += action.payload.amount;
                existingProduct.price += action.payload.price;
            } else {
                state.cart.push(action.payload);
            }
        },
        setProductInfo: (state, action: PayloadAction<Product>) => {
            state.productInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
        });
    }
});

export const { addToCart, setProductInfo } = productSlice.actions;
export default productSlice.reducer;
