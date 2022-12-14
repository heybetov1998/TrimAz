import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewsState } from "./barberDetailsSlice";

export type SellerGetState = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    id: string;
    image: {
        name: string;
        alt: string;
    };
};

export type ProductInfoState = {
    title: string;
    price: number;
    content: string;
    mainImage: string;
    seller: SellerGetState;
    images: string[];
    reviews: ReviewsState;
};

export type ProductDetailsState = {
    product: ProductInfoState;
    loading: boolean;
};

const initialState: ProductDetailsState = {
    product: {
        title: "",
        price: 0,
        content: "",
        mainImage: "",
        seller: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            id: "",
            image: {
                name: "",
                alt: "",
            },
        },
        images: [],
        reviews: [],
    },
    loading: false,
};

export const getProductDetails = createAsyncThunk(
    "products/getProductDetails",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Products/${id}`).then(
            (response) => response.json()
        );
    }
);

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(getProductDetails.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default productDetailsSlice.reducer;
