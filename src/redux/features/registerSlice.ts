import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type LatestProductsSliceState = {
    user: any[];
    loading: boolean;
};

const initialState: LatestProductsSliceState = {
    user: [],
    loading: false,
};

export const registerUser = createAsyncThunk("auth/register", async () => {
    return fetch("https://localhost:7231/api/Auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
});

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default registerSlice.reducer;
