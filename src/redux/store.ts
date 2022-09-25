import { configureStore } from "@reduxjs/toolkit";
import TopBarbersReducer from "../redux/features/topBarbersSlice";
import LatestProductsReducer from "../redux/features/latestProductsSlice";
import BestBarbershopsReducer from "../redux/features/bestBarbershopsSlice";
import ServicesReducer from "../redux/features/servicesSlice";

export const store = configureStore({
    reducer: {
        topBarbers: TopBarbersReducer,
        latestProducts: LatestProductsReducer,
        bestBarbershops: BestBarbershopsReducer,
        services: ServicesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
