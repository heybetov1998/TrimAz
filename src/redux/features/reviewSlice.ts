import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    starValue: 0,
    commentValue: "",
};

export const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        changeStarValue: (state, action) => {
            state.starValue = action.payload;
        },
        changeCommentValue: (state, action) => {
            state.commentValue = action.payload;
        },
    },
});

export const { changeStarValue, changeCommentValue } = reviewSlice.actions;

export default reviewSlice.reducer; 
