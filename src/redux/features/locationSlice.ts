import { createSlice } from "@reduxjs/toolkit";

export type LocationPickerState = {
    defaultLocation: {
        lat: number;
        lng: number;
    };
    zoom: number;
};

export type PickLocationState = {
    location: LocationPickerState;
};

const initialState: PickLocationState = {
    location: {
        zoom: 10,
        defaultLocation: {
            lat: 40.3771945425796,
            lng: 49.85403863131277,
        },
    },
};

export const locationSlice:any = createSlice({
    name: "location",
    initialState: initialState,
    reducers: {
        pickLocation: (state, action) => {
            state.location.defaultLocation = action.payload;
        },
        changeZoom: (state, action) => {
            state.location.zoom = action.payload;
        },
    },
});

export const { pickLocation, changeZoom } = locationSlice.actions;
export default locationSlice.reducer;
