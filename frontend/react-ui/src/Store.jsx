import { configureStore } from "@reduxjs/toolkit";
import createAdSlice from "./features/slices/CreateAdSlice";
import deleteAdSlice from "./features/slices/DeleteAdSlice";
import updateAdSlice from "./features/slices/UpdateAdSlice";
import readAdSlice from "./features/slices/ReadAdSlice";

export const store = configureStore({
    reducer: {
        create: createAdSlice,
        delete: deleteAdSlice,
        update: updateAdSlice,
        read: readAdSlice,
    }
});
