import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type ImagesState = {
    name: string;
    alt: string;
}[];

export type ServicesState = {
    id: number;
    name: string;
    price: number;
    time: string;
}[];

export type VideosState = {
    id: number;
    youtubeId: string;
}[];

export type ReviewState = {
    id: number;
    userId: string;
    userAvatar: string;
    userFirstName: string;
    userLastName: string;
    createdDate: string;
    givenRating: number;
    comment: string;
};

export type ReviewsState = ReviewState[];

export type TimeState = {
    id: number;
    range: string;
};

export type BarberState = {
    firstName: string;
    lastName: string;
    avatar: string;
    starRating: number;
    images: ImagesState;
    services: ServicesState;
    videos: VideosState;
    reviews: ReviewsState;
    times: TimeState[];
};

export type BarberDetailsState = {
    barber: BarberState;
    loading: boolean;
};

const initialState: BarberDetailsState = {
    barber: {
        firstName: "",
        lastName: "",
        avatar: "",
        starRating: 0,
        images: [],
        services: [],
        videos: [],
        reviews: [],
        times: [],
    },
    loading: false,
};

export const getBarberDetails = createAsyncThunk(
    "barbers/getBarberDetails",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Barbers/${id}`).then(
            (response) => response.json()
        );
    }
);

const barberDetailsSlice = createSlice({
    name: "barberDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBarberDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getBarberDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.barber = action.payload;
        });
        builder.addCase(getBarberDetails.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default barberDetailsSlice.reducer;
