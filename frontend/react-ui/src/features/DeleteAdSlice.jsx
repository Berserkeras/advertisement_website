import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from "../features/Axios";

const initialState = {
    isLoading: false,
}

export const deleteAd = createAsyncThunk(
    'delete/DeleteAd',
    async ({ adId }, thunkAPI) => {
        try {
            const resp = await customFetch.delete(`api/v1/ad-board/${adId}`);
            const { status } = resp
            return status
        } catch (error) {
            console.log('ERROR: response.status: ' + error.response.status)
            console.log(error.config.data)
            toast.error(`Ad with ID ${adId} not found for deletion.`)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const deleteAdSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteAd.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteAd.fulfilled, (state, { payload }) => {
                toast.success(`Ad successfully deleted.`)
            })
            .addCase(deleteAd.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload)
            })
    }
})

export default deleteAdSlice.reducer
