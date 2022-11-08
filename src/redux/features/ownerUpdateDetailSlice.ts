import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type OwnerDetailState = {
    id: string;
    firstName: string;
    lastName: string;
};

export type OwnerUpdateDetailState = {
    owner: OwnerDetailState;
    loading: boolean;
};

const initialState: OwnerUpdateDetailState = {
    owner: {
        id: "",
        firstName: "",
        lastName: "",
    },
    loading: false,
};

export const getOwnerUpdateDetail = createAsyncThunk(
    "owners/getOwnerUpdateDetail",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Owners/${id}`).then(
            (response) => response.json()
        );
    }
);

const ownerUpdateDetailSlice = createSlice({
    name: "ownerUpdateDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOwnerUpdateDetail.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getOwnerUpdateDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.owner = action.payload;
        });
        builder.addCase(getOwnerUpdateDetail.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default ownerUpdateDetailSlice.reducer;
