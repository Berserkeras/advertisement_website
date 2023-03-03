import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../Axios";

const initialState = {
    isLoading: false,
    ad: { title: "", description: "", price: "", category: "", adId: "" },
};

export const requestAd = createAsyncThunk(
    'request',
    async ({ adId, updatedData }, thunkAPI) => {
        try {
            const resp = await customFetch.get(`api/v1/ad-board/get-ad/${adId}`);
            const adData = resp.data;
            console.log(adData)
            const updatedAdData = {
                ...adData,
                ...updatedData,
            };
            return { adId, updatedData: updatedAdData };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateAd = createAsyncThunk(
    "update",
    async ({ adId, updatedData }, thunkAPI) => {
        try {
            const resp = await customFetch.post(`api/v1/ad-board/${adId}`, updatedData);
            const adData = resp.data;

            let updatedAdData;
            let method;
            if (adData.title) {
                // If ad exists, update its data
                updatedAdData = {
                    ...adData,
                    ...updatedData,
                };
                method = "post";
            } else {
                console.log("else")
            }



            return { adId, updatedData: updatedAdData };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const updateAdSlice = createSlice({
    name: "update",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestAd.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(requestAd.fulfilled, (state, { payload }) => {
                const { title, description, price, city, category, adId } =
                    payload.updatedData;
                state.isLoading = false;
                state.ad = { title, description, price, city, category, adId };
                toast.success("Ad updated successfully");
            })
            .addCase(requestAd.rejected, (state) => {
                state.isLoading = false;
                toast.error("Failed to update ad");
            })
            .addCase(updateAd.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAd.fulfilled, (state, { payload }) => {
                const { title, description, price, city, category, adId } =
                    payload.updatedData;
                state.isLoading = false;
                state.ad = { title, description, price, city, category, adId };
                toast.success("Ad updated successfully");
            })
            .addCase(updateAd.rejected, (state) => {
                state.isLoading = false;
                toast.error("Failed to update ad");
            });
    },
});

export default updateAdSlice.reducer;
