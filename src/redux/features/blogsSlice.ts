import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type ImageGetDTO = {
    name: string;
    alt: string;
};

export type UserGetDTO = {
    id: string;
    firstName: string;
    lastName: string;
    image: ImageGetDTO;
};

export type BlogGetDTO = {
    blogs: {
        id: number;
        title: string;
        content: string;
        image: ImageGetDTO;
        author: UserGetDTO;
        createdDate: string;
    }[];
    loading: boolean;
};

const initialState: BlogGetDTO = {
    blogs: [],
    loading: false,
};

export const getBlogs = createAsyncThunk(
    "blogs/getBlogs",
    async (take?: number) => {
        return fetch(
            `https://localhost:7231/api/Blogs?${take ? `take=${take}` : ""}`
        ).then((response) => response.json());
    }
);

export const getUserBlogs = createAsyncThunk(
    "blogs/getUserBlogs",
    async (userId: any) => {
        return fetch(
            `https://localhost:7231/api/Blogs/User?userId=${userId}`
        ).then((response) => response.json());
    }
);

export const getBlogsBySearch = createAsyncThunk(
    "blogs/getBlogsBySearch",
    async (keywords: string | null) => {
        return fetch(
            `https://localhost:7231/api/Blogs/Search?search=${keywords}`
        ).then((response) => response.json());
    }
);

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
        //
        builder.addCase(getBlogsBySearch.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBlogsBySearch.fulfilled, (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
        });
        builder.addCase(getBlogsBySearch.rejected, (state, action) => {
            state.loading = false;
        });
        //
        builder.addCase(getUserBlogs.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUserBlogs.fulfilled, (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
        });
        builder.addCase(getUserBlogs.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default blogsSlice.reducer;
