import { configureStore } from "@reduxjs/toolkit";
import TopBarbersReducer from "./features/barbersSlice";
import LatestProductsReducer from "./features/productsSlice";
import BestBarbershopsReducer from "./features/barbershopsSlice";
import ServicesReducer from "../redux/features/servicesSlice";
import BlogsReducer from "../redux/features/blogsSlice";
import BarberDetailsReducer from "../redux/features/barberDetailsSlice";
import BarbershopDetailsReducer from "./features/barbershopDetailsSlice";
import ProductDetailsReducer from "./features/productDetailSlice";
import BlogDetailsReducer from "./features/blogDetailsSlice";
import RegisterReducer from "./features/registerSlice";

export const store = configureStore({
    reducer: {
        barbers: TopBarbersReducer,
        barberDetails: BarberDetailsReducer,
        products: LatestProductsReducer,
        productDetails: ProductDetailsReducer,
        barbershops: BestBarbershopsReducer,
        barbershopDetails: BarbershopDetailsReducer,
        services: ServicesReducer,
        blogs: BlogsReducer,
        blogDetails: BlogDetailsReducer,
        register: RegisterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
