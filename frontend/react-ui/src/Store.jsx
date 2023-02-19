import { configureStore } from "@reduxjs/toolkit";
import createAdSlice from "./features/CreateAdSlice";
import deleteAdSlice from "./features/DeleteAdSlice";

export const store = configureStore({
    reducer: {
        create: createAdSlice,
        delete: deleteAdSlice,
    }
});
