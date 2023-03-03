import { useEffect, useState } from "react";
import CreateAdWrapper from "../../assets/CreateAdWrapper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {requestAd, updateAd} from "../../features/slices/UpdateAdSlice";
import FormUpdateAd from "../../components/FormUpdateAd";
import { handleImageChange } from "../../features/ImageHandler";

const initialState = {
    adId: "",
    title: "",
    description: "",
    price: 0.0,
    city: "",
    category: "",
    image: null,
};

const UpdateAd = () => {
    const [values, setValues] = useState(initialState);
    const { update, isLoading, ad } = useSelector((store) => store.update);
    const dispatch = useDispatch();
    const { title } = ad;
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
            dispatch(updateAd({ adId, updatedData: values }));
        } else {
            dispatch(requestAd({ adId }));
        }
    };

    return (
        <CreateAdWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                {title ? (
                    <>
                        {[
                            { type: "title", name: "title", labelText: "title" },
                            {
                                type: "description",
                                name: "description",
                                labelText: "description",
                            },
                            { type: "price", name: "price", labelText: "price" },
                            { type: "city", name: "city", labelText: "city" },
                            { type: "category", name: "category", labelText: "category" },
                        ].map((input) => (
                            <FormUpdateAd
                                key={input.name}
                                {...input}
                                value={ad[input.name]}
                                handleChange={handleChange}
                            />
                        ))}
                        <FormUpdateAd
                            type="file"
                            name="image"
                            labelText="image"
                            handleChange={handleImageChange}
                        />
                    </>
                ) : (
                    <FormUpdateAd
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
        </CreateAdWrapper>
    );
};

export default UpdateAd;
