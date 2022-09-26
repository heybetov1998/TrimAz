import { configureStore } from "@reduxjs/toolkit";
import TopBarbersReducer from "./features/barbersSlice";
import LatestProductsReducer from "./features/productsSlice";
import BestBarbershopsReducer from "./features/barbershopsSlice";
import ServicesReducer from "../redux/features/servicesSlice";
import BlogsReducer from "../redux/features/blogsSlice";
import BarberDetailsSlice from "../redux/features/barberDetailsSlice";

export const store = configureStore({
    reducer: {
        barbers: TopBarbersReducer,
        barberDetails: BarberDetailsSlice,
        products: LatestProductsReducer,
        barbershops: BestBarbershopsReducer,
        services: ServicesReducer,
        blogs: BlogsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
