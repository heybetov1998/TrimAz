import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PriceProps } from "./barbersSlice";

export type ProductsSliceState = {
    products: any[];
    loading: boolean;
};

const initialState: ProductsSliceState = {
    products: [],
    loading: false,
};

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (take?: number) => {
        return fetch(
            `https://localhost:7231/api/Products?${take ? `take=${take}` : ""}`
        ).then((response) => response.json());
    }
);

export const getProductsByPrice = createAsyncThunk(
    "products/getProductsByPrice",
    async (prices: PriceProps) => {
        return fetch(
            `https://localhost:7231/api/Products/ByPrice?minPrice=${prices.minPrice}&maxPrice=${prices.maxPrice}`
        ).then((response) => response.json());
    }
);

export const getProductsBySearch = createAsyncThunk(
    "products/getProductsBySearch",
    async (keywords: string | null) => {
        return fetch(
            `https://localhost:7231/api/Products/Search?search=${keywords}`
        ).then((response) => response.json());
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
        });
        //
        builder.addCase(getProductsByPrice.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProductsByPrice.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProductsByPrice.rejected, (state, action) => {
            state.loading = false;
        });
        //
        builder.addCase(getProductsBySearch.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProductsBySearch.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProductsBySearch.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default productsSlice.reducer;
