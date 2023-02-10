import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../features/Axios'
import { toast } from 'react-toastify'

const initialState = {
    isLoading: false,
}

export const createAd = createAsyncThunk(
    'ad/createAd',
    async ({ title, description, price, category }, thunkAPI) => {
        try {
            const resp = await customFetch.post('ads/create_ad/', {
                title,
                description,
                price,
                category
            })
            console.log(resp)
            const { data } = resp
            return data
        } catch (error) {
            console.log('ERROR: response.status: ' + error.response.status)
            console.log(error.response.data)
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const createAdSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAd.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAd.fulfilled, (state, { payload }) => {
                const { title, description, price, category } = payload
                console.log('Ad info ' + JSON.stringify(payload))
                state.isLoading = false
                state.ad = { title, description, price, category }
                toast.success(`Ad created for ${title}.`)
            })
            .addCase(createAd.rejected, (state, { payload }) => {
                const { error } = payload
                state.isLoading = false
                toast.error(error)
            })
    }
})

export default createAdSlice.reducer
