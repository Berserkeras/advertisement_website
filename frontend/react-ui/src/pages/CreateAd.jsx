import {useEffect, useState} from 'react'
import CreateAdWrapper from '../assets/CreateAdWrapper'
import FormCreateAd from '../components/FormCreateAd'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { createAd } from '../features/CreateAdSlice'
import {useNavigate} from "react-router-dom";

const initialState = {
    title: "",
    description: "",
    price: 0,
    category: "",
    city: "",
    image: null
}

const CreateAd = () => {
    const [values, setValues] = useState(initialState)
    const { create, isLoading  } = useSelector((store) => store.create)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [name]: value });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        const image = event.target.name;
        reader.onload = () => {
            const imageData = reader.result.split(',')[1]; // extract the Base64-encoded image data
            const isPng = file.type === 'image/png';
            isPng
                ? setValues({ ...values , [image]: imageData  })
                : toast.error("Wrong image format. Please upload a PNG file.");

        };
        reader.readAsDataURL(file);
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const { title, description, price, category, city, image } = values
        console.log(title)
        if (!title || !description || !price || !category || !city) {
            toast.error('Please fill out all fields')
            return
        }

        dispatch(createAd({
            title,
            description,
            price,
            category,
            city,
            image
        }))
    }
    useEffect(() => {
        if (create?.length) {
            setTimeout(() => {
                console.log("show UUID:", create);
                navigate(`/ad-id/${create}`, { state: { create } });
            }, 2000);
        }
    }, [create, navigate]);

    return (
        <CreateAdWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                {/* TODO Map */}
                <FormCreateAd
                    type="title"
                    name="title"
                    labelText="title"
                    value={values.title}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="description"
                    name="description"
                    labelText="description"
                    value={values.description}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="price"
                    name="price"
                    labelText="price"
                    value={values.price}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="city"
                    name="city"
                    labelText="city"
                    value={values.city}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="category"
                    name="category"
                    labelText="category"
                    value={values.category }
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="file"
                    name="image"
                    labelText="image"
                    handleChange={handleImageChange}
                />
                <button type="submit" className="btn-register" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create' }
                </button>
            </form>
        </CreateAdWrapper>
    )
}

export default CreateAd
