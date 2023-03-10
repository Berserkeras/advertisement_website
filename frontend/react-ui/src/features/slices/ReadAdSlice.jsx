import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customFetch from "../Axios";

const initialState = {
    isLoading: false,
    ads: [],
    ad: {
        title: undefined,
        description: undefined,
        price: undefined,
        city: undefined,
        category: undefined,
        adId: "",
        image: null,
        imageUrl: null
    },
};

export const fetchAds = createAsyncThunk(
    'read/fetchAds',
    async () => {
        const formData = new FormData();
        formData.append('title', null);
        formData.append('description', null);
        formData.append('image', null);

        const body = new URLSearchParams(formData).toString();

        console.log("trying")
        const resp = await customFetch.post('api/v1/ad-board/check-ad', body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformResponse: [(data, headers) => {
                delete headers["headers"];
                return data;
            }]

        });
        console.log("before map")
        const ads = JSON.parse(resp.data).map(ad => {
            const blob = new Blob([new Uint8Array(atob(ad.image).split('').map(
                (char) => char.charCodeAt(0)))], {type: 'image/png'});
            console.log("READ AD SLICE: " + blob.type)
            return {
                ...ad,
                imageUrl:  URL.createObjectURL(blob)
            };
        });
        return ads;
    }
);

const readAdSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action) => {
            state.isError = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAds.fulfilled, (state, action) => {
                state.isLoading = false;
                const ads = action.payload;
                state.ads = ads;
                state.ad = ads[0] || {};
                state.isError = false;
            })
            .addCase(fetchAds.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const { setIsLoading, setIsError, setQuery } = readAdSlice.actions;
export default readAdSlice.reducer;
