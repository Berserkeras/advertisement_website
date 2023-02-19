import {useEffect, useState} from 'react'
import CreateAdWrapper from '../assets/CreateAdWrapper'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom";
import {deleteAd} from "../features/DeleteAdSlice";
import FormDeleteAd from "../components/FormDeleteAd";

const initialState = {
    adId: "",
}

const DeleteAd = () => {
    const [values, setValues] = useState(initialState)
    const { create, isLoading  } = useSelector((store) => store.create)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const { adId } = values
        console.log(adId)
        if (!adId) {
            toast.error('Please fill Ad Id')
            return
        }

        dispatch(deleteAd({
            adId,
        }))
    }

    return (
        <CreateAdWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                <FormDeleteAd
                    type="adId"
                    name="adId"
                    labelText="adId"
                    value={values.adId}
                    handleChange={handleChange}
                />
                <button type="submit" className="btn-register" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Delete' }
                </button>
            </form>
        </CreateAdWrapper>
    )
}

export default DeleteAd
