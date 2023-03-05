import { useState} from 'react'
import AdFormWrapper from '../../assets/AdFormWrapper'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {deleteAd} from "../../features/slices/DeleteAdSlice";
import AdForm from "../../components/AdForm";

const initialState = {
    adId: "",
}

const DeleteAd = () => {
    const [values, setValues] = useState(initialState)
    const { isLoading  } = useSelector((store) => store.create)
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
        <AdFormWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                <AdForm
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
        </AdFormWrapper>
    )
}

export default DeleteAd
