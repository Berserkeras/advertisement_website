import React from 'react'
import CreateAd from './pages/CreateAd'
import Landing from "./pages/Landing";
import Error from './pages/ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DeleteAd from "./pages/DeleteAd";
import AdIdPage from "./pages/AdIdPage";
import UpdateAd from "./pages/UpdateAd";

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="create" element={<CreateAd />} />
                <Route path="ad-id/:uuid" element={<AdIdPage />} />
                <Route path="delete" element={<DeleteAd />} />
                <Route path="update" element={<UpdateAd />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App
