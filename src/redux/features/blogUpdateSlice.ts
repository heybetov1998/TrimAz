import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type UpdateState = {
    id: number;
    title: string;
    content: string;
    price: number;
};

export type ProductUpdateState = {
    product: UpdateState;
    loading: boolean;
};

const initialState: ProductUpdateState = {
    product: {
        id: 0,
        title: "",
        content: "",
        price: 0,
    },
    loading: false,
};

export const getProductUpdate = createAsyncThunk(
    "products/getProductUpdate",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Products/${id}`).then(
            (response) => response.json()
        );
    }
);

const productUpdateSlice = createSlice({
    name: "productUpdate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductUpdate.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProductUpdate.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(getProductUpdate.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default productUpdateSlice.reducer;
