import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import customFetch from '../features/Axios'
import { toast } from 'react-toastify'
import {v4 as uuid } from "uuid";

const initialState = {
    isLoading: false,
    unique_id: ""
}

export const createAd = createAsyncThunk(
    'posts/getPosts',
    async ({ title, description, price, category, city, image }, thunkAPI) => {
        try {
            const adId = uuid(); // generate a new UUID
            const resp = await customFetch.post('api/v1/ad-board', {
                title,
                description,
                price,
                category,
                city,
                image,
                adId
            })
            const { config: { data } } = resp
            return JSON.parse(data)
        } catch (error) {
            console.log('ERROR: response.status: ' + error.response.status)
            console.log(error.config.data)
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
                const { title, description, price, category, adId } = payload
                console.log('Ad info ' + JSON.stringify({ title, description, price, category }))
                state.isLoading = false
                state.ad = { title, description, price, category }
                state.create = adId
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
