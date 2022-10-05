import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type UserSettingState = {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userName: string;
    email: string;
};

export type BarberDetailsState = {
    user: UserSettingState;
    loading: boolean;
};

const initialState: BarberDetailsState = {
    user: {
        id: "",
        firstName: "",
        lastName: "",
        avatar: "",
        email: "",
        userName: "",
    },
    loading: false,
};

export const getUserSettings = createAsyncThunk(
    "users/getUserSettings",
    async (id: string | undefined) => {
        return fetch(`https://localhost:7231/api/Users/${id}`).then(
            (response) => response.json()
        );
    }
);

const userSettingsSlice = createSlice({
    name: "userSettings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserSettings.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUserSettings.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getUserSettings.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export default userSettingsSlice.reducer;
