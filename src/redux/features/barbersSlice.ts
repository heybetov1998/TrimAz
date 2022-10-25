import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type BarbersState = {
    barbers: any[];
    loading: boolean;
};

const initialState: BarbersState = {
    barbers: [],
    loading: false,
};

export const getBarbers = createAsyncThunk(
    "barbers/getBarbers",
    async (take?: number | string) => {
        return fetch(
            `https://localhost:7231/api/Barbers?${take ? `take=${take}` : ""}`
        ).then((response) => response.json());
    }
);

export interface FilterProps {
    serviceId: number | string | null;
    timeId: number | string | null;
}

export const getBarbersFiltered = createAsyncThunk(
    "barbers/getBarbersFiltered",
    async (filters: FilterProps) => {
        return fetch(
            `https://localhost:7231/api/Barbers/Filtered?serviceId=${filters.serviceId}&timeId=${filters.timeId}`
        ).then((response) => response.json());
    }
);

const barbersSlice = createSlice({
    name: "barbers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBarbers.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarbers.fulfilled, (state, action) => {
            state.loading = false;
            state.barbers = action.payload;
        });
        builder.addCase(getBarbers.rejected, (state, action) => {
            state.loading = false;
        });
        //
        builder.addCase(getBarbersFiltered.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarbersFiltered.fulfilled, (state, action) => {
            state.loading = false;
            state.barbers = action.payload;
        });
        builder.addCase(getBarbersFiltered.rejected, (state, action) => {
            state.loading = true;
        });
    },
});

export default barbersSlice.reducer;
