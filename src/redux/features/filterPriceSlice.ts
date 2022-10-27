import { createSlice } from "@reduxjs/toolkit";

export type FilterPriceType = {
    minPrice: number;
    maxPrice: number;
};

const initialState: FilterPriceType = {
    minPrice: 0,
    maxPrice: 0,
};

export const filterPriceSlice = createSlice({
    name: "filterPrice",
    initialState,
    reducers: {
        changeMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        changeMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
    },
});

export const { changeMinPrice, changeMaxPrice } = filterPriceSlice.actions;

export default filterPriceSlice.reducer;
