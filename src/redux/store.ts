import { configureStore } from "@reduxjs/toolkit";
import TopBarbersReducer from "../redux/features/topBarbersSlice";
import LatestProductsReducer from "../redux/features/latestProductsSlice";

export const store = configureStore({
    reducer: {
        topBarbers: TopBarbersReducer,
        latestProducts: LatestProductsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
