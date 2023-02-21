import { configureStore } from "@reduxjs/toolkit";
import createAdSlice from "./features/CreateAdSlice";
import deleteAdSlice from "./features/DeleteAdSlice";
import updateAdSlice from "./features/UpdateAdSlice";

export const store = configureStore({
    reducer: {
        create: createAdSlice,
        delete: deleteAdSlice,
        update: updateAdSlice,
    }
});
