import React from 'react'
import CreateAd from './pages/create/CreateAd'
import Landing from "./pages/Landing";
import Error from './pages/ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DeleteAd from "./pages/delete/DeleteAd";
import AdIdPage from "./pages/create/AdIdPage";
import UpdateAd from "./pages/update/UpdateAd";
import CheckAds from "./pages/read/CheckAds";

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/create" element={<CreateAd />} />
                <Route exact path="/ad-id/:uuid" element={<AdIdPage />} />
                <Route exact path="/delete" element={<DeleteAd />} />
                <Route exact path="/update" element={<UpdateAd />} />
                <Route exact path="/ads" element={<CheckAds />} />
                <Route exact path="/ads/:slug" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App
