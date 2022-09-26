import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    },
});

export default productsSlice.reducer;
