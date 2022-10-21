import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type BarberDetailState = {
    id: any;
    firstName: string;
    lastName: string;
    images: {
        name: string;
        alt: string;
    }[];
    barbershopId: number;
    services: {
        id: number;
        name: string;
        price: number;
    }[];
};

export type BarberUpdateDetailState = {
    barber: BarberDetailState;
    loading: boolean;
};

const initialState: BarberUpdateDetailState = {
    barber: {
        id: "",
        firstName: "",
        lastName: "",
        barbershopId: 0,
        images: [],
        services: [],
    },
    loading: false,
};

export const getBarberUpdateDetail = createAsyncThunk(
    "barbers/getBarberUpdateDetail",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Barbers/${id}`).then(
            (response) => response.json()
        );
    }
);

const barberUpdateDetailSlice = createSlice({
    name: "barberUpdateDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBarberUpdateDetail.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarberUpdateDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.barber = action.payload;
        });
        builder.addCase(getBarberUpdateDetail.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default barberUpdateDetailSlice.reducer;
