import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../features/Axios'
import { toast } from 'react-toastify'

const initialState = {
    isLoading: false,
}

export const createAd = createAsyncThunk(
    'posts/getPosts',
    async ({ title, description, price, category, city }, thunkAPI) => {
        try {
            const resp = await customFetch.post('api/v1/ad-board', {
                title,
                description,
                price,
                category,
                city
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
