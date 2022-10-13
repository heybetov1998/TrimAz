import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type UpdateState = {
    title: string;
    content: string;
};

export type BlogUpdateState = {
    blog: UpdateState;
    loading: boolean;
};

const initialState: BlogUpdateState = {
    blog: {
        title: "",
        content: "",
    },
    loading: false,
};

export const getBlogUpdate = createAsyncThunk(
    "blogs/getBlogUpdate",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Blogs/${id}`).then(
            (response) => response.json()
        );
    }
);

const blogUpdateSlice = createSlice({
    name: "blogUpdate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogUpdate.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBlogUpdate.fulfilled, (state, action) => {
            state.loading = false;
            state.blog = action.payload;
        });
        builder.addCase(getBlogUpdate.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default blogUpdateSlice.reducer;
