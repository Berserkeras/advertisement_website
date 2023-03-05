import { useState } from "react";
import AdFormWrapper from "../../assets/AdFormWrapper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {requestAd, updateAd} from "../../features/slices/UpdateAdSlice";
import AdForm from "../../components/AdForm";
import { handleImageChange } from "../../features/ImageHandler";

const initialState = {
    adId: "",
    title: "",
    description: "",
    price: null,
    city: "",
    category: "",
    image: null,
};

const UpdateAd = () => {
    const [values, setValues] = useState(initialState);
    const { ad, isLoading } = useSelector((store) => store.update);
    const dispatch = useDispatch();
    const { title } = ad;
    console.log("titleAd: " + title)
    const buttonName = title ? "Update" : "Request";


    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { adId } = values;

        if (!adId) {
            toast.error("Please fill Ad Id");
            return;
        }

        if (buttonName === "Update") {
            const updatedData = Object.fromEntries(Object.entries(values).filter(([_, value]) => value !== null));
            dispatch(updateAd({ adId, updatedData }));
        } else {
            dispatch(requestAd({ adId }));
        }
    };

    return (
        <AdFormWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                {title ? (
                    <>
                        {[
                            { type: "title", name: "title", labelText: "title" },
                            { type: "description", name: "description", labelText: "description" },
                            { type: "price", name: "price", labelText: "price" },
                            { type: "city", name: "city", labelText: "city" },
                            { type: "category", name: "category", labelText: "category" },
                        ].map((input) => (
                            <AdForm key={input.name}
                                    {...input}
                                    value={values[input.name]}
                                    handleChange={handleChange}
                                    placeholder={ad[input.name]}

                            />
                        ))}
                        <AdForm
                            type="file"
                            name="image"
                            labelText="image"
                            handleChange={handleImageChange}
                        />
                    </>
                ) : (
                    <AdForm
                        type="adId"
                        name="adId"
                        labelText="adId"
                        value={values.adId}
                        handleChange={handleChange}
                    />
                )}

                <button type="submit" className="btn-register" disabled={isLoading}>
                    {isLoading ? "Loading..." : buttonName}
                </button>
            </form>
        </AdFormWrapper>
    );
};

export default UpdateAd;
