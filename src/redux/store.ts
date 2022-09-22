import { configureStore } from "@reduxjs/toolkit";
import TopBarbersReducer from "../redux/features/topBarbersSlice";

export const store = configureStore({
    reducer: {
        topBarbers: TopBarbersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
