import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type BlogsSliceState = {
    blogs: any[];
    loading: boolean;
};

const initialState: BlogsSliceState = {
    blogs: [],
    loading: false,
};

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
    return fetch("https://localhost:7231/api/Blogs").then((response) =>
        response.json()
    );
});

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
        });
        builder.addCase(getBlogs.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default blogsSlice.reducer;
