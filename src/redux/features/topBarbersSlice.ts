import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type TopBarbersState = {
    topBarbers: any[];
    loading: boolean;
};

const initialState: TopBarbersState = {
    topBarbers: [],
    loading: false,
};

export const getTopBarbers = createAsyncThunk(
    "barbers/getTopBarbers",
    async () => {
        return fetch("https://localhost:7231/api/Barbers?take=15").then((response) =>
            response.json()
        );
    }
);

const topBarbersSlice = createSlice({
    name: "topBarbers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopBarbers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getTopBarbers.fulfilled, (state, action) => {
            state.loading = false;
            state.topBarbers = action.payload;
        });
        builder.addCase(getTopBarbers.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default topBarbersSlice.reducer;
