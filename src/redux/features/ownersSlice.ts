import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type OwnerState = {
    owners: any[];
    loading: boolean;
};

const initialState: OwnerState = {
    owners: [],
    loading: false,
};

export const getOwners = createAsyncThunk(
    "owners/getOwners",
    async (take?: number | string) => {
        return fetch(
            `https://localhost:7231/api/Owners?${take ? `take=${take}` : ""}`
        ).then((response) => response.json());
    }
);

const ownersSlice = createSlice({
    name: "owners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOwners.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getOwners.fulfilled, (state, action) => {
            state.loading = false;
            state.owners = action.payload;
        });
        builder.addCase(getOwners.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default ownersSlice.reducer;
