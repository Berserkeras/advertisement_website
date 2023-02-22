import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import customFetch from "../features/Axios";

const initialState = {
    isLoading: false,
    ad: { title: "", description: "", price: "", category: "", adId: "" }
}

export const updateAd = createAsyncThunk(
    'update',
    async ({ adId, updatedData }, thunkAPI) => {
        try {
            const resp = await customFetch.get(`api/v1/ad-board/get-ad/${adId}`);
            const adData = resp.data;
            console.log(adData)
            const updatedAdData = {
                ...adData,
                ...updatedData,
            };

            // await customFetch.post(`api/v1/ad-board/${adId}`, updatedAdData);
            return { adId, updatedData: updatedAdData };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


const updateAdSlice = createSlice({
    name: "update",
    initialState: {
        isLoading: false,
        ad: { title: "", description: "", price: "", category: "", adId: "" }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateAd.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAd.fulfilled, (state, { payload }) => {
                const { title, description, price, category, adId } = payload.updatedData;
                state.isLoading = false;
                state.ad = { title, description, price, category, adId };
                toast.success("Ad updated successfully");
            })
            .addCase(updateAd.rejected, (state) => {
                state.isLoading = false;
                toast.error("Failed to update ad");
            })
            .addDefaultCase((state, action) => {
                console.log(`Unhandled action type: ${action.type}`);
            });
    },
});
export default updateAdSlice.reducer
