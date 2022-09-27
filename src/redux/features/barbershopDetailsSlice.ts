import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewState } from "./barberDetailsSlice";

export type BarberLessDataState = {
    id: string;
    firstName: string;
    lastName: string;
    imageName: string;
    starRating: number;
};

export type LocationState = {
    latitude: number;
    longtitude: number;
};

export type ServiceNameState = {
    id: number;
    name: string;
};

export type BarbershopState = {
    name: string;
    barbers: BarberLessDataState[];
    locations: LocationState[];
    services: ServiceNameState[];
    images: string[];
    reviews: ReviewState[];
};

export type BarbershopDetailsState = {
    loading: boolean;
    barbershop: BarbershopState;
};

const initialState: BarbershopDetailsState = {
    barbershop: {
        name: "",
        barbers: [],
        locations: [],
        services: [],
        images: [],
        reviews: [],
    },
    loading: false,
};

export const getBarbershopDetails = createAsyncThunk(
    "barbershops/getBarbershopDetails",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Barbershops/${id}`).then(
            (response) => response.json()
        );
    }
);

const barbershopDetailsSlice = createSlice({
    name: "barbershopDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBarbershopDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarbershopDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.barbershop = action.payload;
        });
        builder.addCase(getBarbershopDetails.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default barbershopDetailsSlice.reducer;
