import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoggedUserState {
    user: {
        firstName: string;
        lastName: string;
        userName: string;
        email: string;
        roleNames: string[];
        token: string;
    };
}

const initialState: LoggedUserState = {
    user: {
        ...JSON.parse(localStorage.getItem("logged_user") || "{}"),
    },
};

export const localUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<LoggedUserState>) => {
            state = action.payload;
        },
    },
});

export const { updateUser } = localUserSlice.actions;

export default localUserSlice.reducer;
