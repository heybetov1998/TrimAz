import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type SellerState = {
    sellers: any[];
    loading: boolean;
};

const initialState: SellerState = {
    sellers: [],
    loading: false,
};

export const getSellers = createAsyncThunk(
    "sellers/getSellers",
    async (take?: number | string) => {
        return fetch(
            `https://localhost:7231/api/Sellers?${take ? `take=${take}` : ""}`
        ).then((response) => response.json());
    }
);

const sellersSlice = createSlice({
    name: "sellers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSellers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getSellers.fulfilled, (state, action) => {
            state.loading = false;
            state.sellers= action.payload;
        });
        builder.addCase(getSellers.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default sellersSlice.reducer;
