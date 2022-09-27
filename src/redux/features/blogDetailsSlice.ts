import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserGetState } from "../../components/UI/Author/AuthorInfo";

export type ImageMainState = {
    name: string;
    isMain: boolean;
};

export type UserLightGetState = {
    firstName: string;
    lastName: string;
    avatar: string;
};

export type BlogInfoState = {
    title: string;
    content: string;
    createdDate: string;
    images: ImageMainState[];
    author: UserGetState;
};

export type BlogpDetailsState = {
    blog: BlogInfoState;
    loading: boolean;
};

const initialState: BlogpDetailsState = {
    blog: {
        title: "",
        content: "",
        createdDate: "",
        images: [],
        author: {
            id: "",
            firstName: "",
            lastName: "",
            image: {
                name: "",
                alt: "",
            },
        },
    },
    loading: false,
};

export const getBlogDetails = createAsyncThunk(
    "blogs/getBlogDetails",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Blogs/${id}`).then(
            (response) => response.json()
        );
    }
);

const blogDetailsSlice = createSlice({
    name: "blogDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBlogDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.blog = action.payload;
        });
        builder.addCase(getBlogDetails.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default blogDetailsSlice.reducer;
