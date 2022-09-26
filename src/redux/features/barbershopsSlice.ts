import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type BarbershopsState = {
    barbershops: any[];
    loading: boolean;
};

const initialState: BarbershopsState = {
    barbershops: [],
    loading: false,
};

export const getBarbershops = createAsyncThunk(
    "barbershops/getBarbershops",
    async (take?: number) => {
        return fetch(
            `https://localhost:7231/api/Barbershops?${
                take ? `take=${take}` : ""
            }`
        ).then((response) => response.json());
    }
);

const barbershopsSlice = createSlice({
    name: "barbershops",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBarbershops.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarbershops.fulfilled, (state, action) => {
            state.loading = false;
            state.barbershops = action.payload;
        });
        builder.addCase(getBarbershops.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default barbershopsSlice.reducer;
