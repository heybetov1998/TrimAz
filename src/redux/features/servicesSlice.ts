import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type LatestProductsSliceState = {
    services: any[];
    loading: boolean;
};

const initialState: LatestProductsSliceState = {
    services: [],
    loading: false,
};

export const getServices = createAsyncThunk(
    "services/getServices",
    async () => {
        return fetch("https://localhost:7231/api/Services").then((response) =>
            response.json()
        );
    }
);

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getServices.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getServices.fulfilled, (state, action) => {
            state.loading = false;
            state.services = action.payload;
        });
        builder.addCase(getServices.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default servicesSlice.reducer;
