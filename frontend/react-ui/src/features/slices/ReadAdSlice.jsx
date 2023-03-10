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
        imageUrl: null // New attribute to store image URL
    },
};

export const fetchAds = createAsyncThunk(
    'read/fetchAds',
    async () => {
        const formData = new FormData();
        // Add any fields you need to the formData object
        formData.append('title', null);
        formData.append('description', null);
        // Add any files you need to upload
        formData.append('image', null);

        const body = new URLSearchParams(formData).toString();

        console.log("trying")
        const resp = await customFetch.post('api/v1/ad-board/check-ad', body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformResponse: [(data, headers) => {
                // Remove the headers property from the response
                delete headers["headers"];
                return data;
            }]

        });
        console.log("before map")
        const ads = JSON.parse(resp.data).map(ad => {
            //console.log("resp ads: " + ad.image)
            const blob = new Blob([new Uint8Array(atob(ad.image).split('').map(
                (char) => char.charCodeAt(0)))], {type: 'image/png'});
            console.log("READ AD SLICE: " + blob.type)
            return {
                ...ad,
                imageUrl:  URL.createObjectURL(blob)
            };
        });
        console.log(ads)
        return ads;
        // console.log(resp.config.url); // Log the request URL
        // // console.log("req:" + JSON.stringify(resp.data))
        // const { status, data } = resp;
        // //console.log(data)
        //
        // if (status === 200) {
        //
        //
        //     //  return  data;
        // } else {
        //     console.log("asd")
        // }
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
                // action.payload.data
                console.log(action);

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
