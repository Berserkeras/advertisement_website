import { configureStore } from "@reduxjs/toolkit";
import createAdSlice from "./features/CreateAdSlice";


export const store = configureStore({
    reducer: {
        create: createAdSlice,
    }
});
