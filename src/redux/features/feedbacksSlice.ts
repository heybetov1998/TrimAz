import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type FeedbacksSliceState = {
    feedbacks: any[];
    loading: boolean;
};

const initialState: FeedbacksSliceState = {
    feedbacks: [],
    loading: false,
};

export const getFeedbacks = createAsyncThunk(
    "feedbacks/getFeedbacks",
    async (take?: number) => {
        return fetch(
            `https://localhost:7231/api/Feedbacks?${take ? `take=${take}` : ""}`
        ).then((response) => response.json());
    }
);

const feedbacksSlice = createSlice({
    name: "feedbacks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFeedbacks.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getFeedbacks.fulfilled, (state, action) => {
            state.loading = false;
            state.feedbacks = action.payload;
        });
        builder.addCase(getFeedbacks.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default feedbacksSlice.reducer;
