import {useEffect, useState} from 'react'
import CreateAdWrapper from '../assets/CreateAdWrapper'
import FormCreateAd from '../components/FormCreateAd'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { createAd } from '../features/CreateAdSlice'

const initialState = {
    title: "",
    description: "",
    price: "",
    category: "",
    city: ""
}

const CreateAd = () => {
    const [values, setValues] = useState(initialState)
    const { create, isLoading } = useSelector((store) => store.create)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const { title, description, price, category, city } = values
        console.log(title)
        if (!title || !description || !price || !category || !city) {
            toast.error('Please fill out all fields')
            return
        }

        console.log('title: ' + title)
        dispatch(createAd({
            title,
            description,
            price,
            category,
            city
        }))
    }
    useEffect(() => {
        if (create) {
            setTimeout(() => {
                console.log("show UUID")
            }, 2000);
        }
    }, [create]);
    return (
        <CreateAdWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                <FormCreateAd
                    type="title"
                    name="title"
                    labelText="title"
                    value={values.title}
                    handleChange={handleChange}
                    placeholder="title"
                />
                <FormCreateAd
                    type="description"
                    name="description"
                    labelText="description"
                    value={values.description}
                    handleChange={handleChange}
                    placeholder="description"
                />
                <FormCreateAd
                    type="price"
                    name="price"
                    labelText="price"
                    value={values.price}
                    handleChange={handleChange}
                    placeholder="price"
                />
                <FormCreateAd
                    type="city"
                    name="city"
                    labelText="city"
                    value={values.city}
                    handleChange={handleChange}
                    placeholder="city"
                />
                <FormCreateAd
                    type="category"
                    name="category"
                    labelText="category"
                    value={values.category}
                    handleChange={handleChange}
                    placeholder="category"
                />
                <button type="submit" className="btn-register" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create' }
                </button>
            </form>
        </CreateAdWrapper>
    )
}

export default CreateAd
