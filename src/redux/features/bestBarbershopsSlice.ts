import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type BestBarbershopsState = {
    bestBarbershops: any[];
    loading: boolean;
};

const initialState: BestBarbershopsState = {
    bestBarbershops: [],
    loading: false,
};

export const getBestBarbershops = createAsyncThunk(
    "barbershops/getBestBarbershops",
    async () => {
        return fetch("https://localhost:7231/api/Barbershops?take=12").then(
            (response) => response.json()
        );
    }
);

const bestBarbershopsSlice = createSlice({
    name: "bestBarbershops",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBestBarbershops.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBestBarbershops.fulfilled, (state, action) => {
            state.loading = false;
            state.bestBarbershops = action.payload;
        });
        builder.addCase(getBestBarbershops.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default bestBarbershopsSlice.reducer;
