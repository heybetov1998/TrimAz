import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type LatestProductsSliceState = {
    latestProducts: any[];
    loading: boolean;
};

const initialState: LatestProductsSliceState = {
    latestProducts: [],
    loading: false,
};

export const getlatestProducts = createAsyncThunk(
    "products/getLatestProducts",
    async () => {
        return fetch("https://localhost:7231/api/Products").then((response) =>
            response.json()
        );
    }
);

const latestProductsSlice = createSlice({
    name: "topBarbers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getlatestProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getlatestProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.latestProducts = action.payload;
        });
        builder.addCase(getlatestProducts.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default latestProductsSlice.reducer;
