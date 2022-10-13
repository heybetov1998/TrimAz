import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TimeState = {
    times: {
        id: number;
        range: string;
    }[];
    loading: boolean;
};

const initialState: TimeState = {
    times: [],
    loading: false,
};

export const getTimes = createAsyncThunk("times/getTimes", async () => {
    return fetch("https://localhost:7231/api/Times").then((response) =>
        response.json()
    );
});

const timeSlice = createSlice({
    name: "times",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTimes.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getTimes.fulfilled, (state, action) => {
            state.loading = false;
            state.times = action.payload;
        });
        builder.addCase(getTimes.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default timeSlice.reducer;
