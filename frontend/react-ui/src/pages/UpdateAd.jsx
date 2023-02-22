import { useEffect, useState } from "react";
import CreateAdWrapper from "../assets/CreateAdWrapper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import { updateAd } from "../features/UpdateAdSlice";
import FormDeleteAd from "../components/FormDeleteAd";
import FormUpdateAd from "../components/FormUpdateAd";

const initialState = {
    adId: "",
    title: "asd",
};

const UpdateAd = () => {
    const [values, setValues] = useState(initialState);
    const { create, isLoading, ad } = useSelector((store) => store.update);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { adId } = values;
        console.log(adId);
        if (!adId) {
            toast.error("Please fill Ad Id");
            return;
        }

        dispatch(updateAd({ adId }));
    };

    useEffect(() => {
        if (location.state && location.state.ad) {
            setValues({ ...values, title: location.state.ad.title });
        }
    }, [location, values]);

    useEffect(() => {
        if (ad.title) {
            setValues({ ...values, title: ad.title });
        }
    }, [ad.title, values]);

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
                <FormDeleteAd
                    type="title"
                    name="title"
                    labelText="title"
                    value={values.title}
                    placeholder="qwe"
                    handleChange={handleChange}
                />
                <button type="submit" className="btn-register" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Update"}
                </button>
            </form>
        </CreateAdWrapper>
    );
};

export default UpdateAd
