import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import customFetch from "../features/Axios";

const initialState = {
    isLoading: false,
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
    name: 'update',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateAd.pending, (state) => {
                console.log("555")
                state.isLoading = true
            })
            .addCase(updateAd.fulfilled, (state, { payload }) => {
                console.log("updateAd.fulfilled was called with payload: ", payload);
                // const { title, description, price, category } = payload
                // state.ad = { title, description, price, category }
                // console.log("updateInfo")
                // console.log(title)
                // console.log(description)
                toast.success("asd")
            })
            .addCase(updateAd.rejected, (state, { payload }) => {
                console.log("1231")
                state.isLoading = false
                toast.error(payload)
            })
            .addDefaultCase((state, action) => {
                console.log(`Unhandled action type: ${action.type}`);
            });

    }
})

export default updateAdSlice.reducer
