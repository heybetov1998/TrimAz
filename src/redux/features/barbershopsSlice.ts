import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PriceProps } from "./barbersSlice";

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

export const getOwnerBarbershops = createAsyncThunk(
    "barbershops/getOwnerBarbershops",
    async (ownerId: any) => {
        return fetch(
            `https://localhost:7231/api/Barbershops/Owner?ownerId=${ownerId}`
        ).then((response) => response.json());
    }
);

export const getBarbershopsByPrice = createAsyncThunk(
    "barbershops/getBarbershopsByPrice",
    async (prices: PriceProps) => {
        return fetch(
            `https://localhost:7231/api/Barbershops/ByPrice?minPrice=${prices.minPrice}&maxPrice=${prices.maxPrice}`
        ).then((response) => response.json());
    }
);

export const getBarbershopsBySearch = createAsyncThunk(
    "barbershops/getBarbershopsBySearch",
    async (keywords: string | null) => {
        return fetch(
            `https://localhost:7231/api/Barbershops/Search?search=${keywords}`
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
        //
        builder.addCase(getBarbershopsByPrice.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarbershopsByPrice.fulfilled, (state, action) => {
            state.loading = false;
            state.barbershops = action.payload;
        });
        builder.addCase(getBarbershopsByPrice.rejected, (state, action) => {
            state.loading = true;
        });
        //
        builder.addCase(getBarbershopsBySearch.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarbershopsBySearch.fulfilled, (state, action) => {
            state.loading = false;
            state.barbershops = action.payload;
        });
        builder.addCase(getBarbershopsBySearch.rejected, (state, action) => {
            state.loading = true;
        });
        //
        builder.addCase(getOwnerBarbershops.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getOwnerBarbershops.fulfilled, (state, action) => {
            state.loading = false;
            state.barbershops = action.payload;
        });
        builder.addCase(getOwnerBarbershops.rejected, (state, action) => {
            state.loading = true;
        });
    },
});

export default barbershopsSlice.reducer;
