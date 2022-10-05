import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type SellerDetailState = {
    id: string;
    firstName: string;
    lastName: string;
};

export type SellerUpdateDetailState = {
    seller: SellerDetailState;
    loading: boolean;
};

const initialState: SellerUpdateDetailState = {
    seller: {
        id: "",
        firstName: "",
        lastName: "",
    },
    loading: false,
};

export const getSellerUpdateDetail = createAsyncThunk(
    "sellers/getSellerUpdateDetail",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Sellers/${id}`).then(
            (response) => response.json()
        );
    }
);

const sellerUpdateDetailSlice = createSlice({
    name: "sellerUpdateDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSellerUpdateDetail.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getSellerUpdateDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.seller = action.payload;
        });
        builder.addCase(getSellerUpdateDetail.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default sellerUpdateDetailSlice.reducer;
