import { useState } from 'react'
import CreateAdWrapper from '../assets/CreateAdWrapper'
import FormCreateAd from '../components/FormCreateAd'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { createAd } from '../features/CreateAdSlice'

const initialState = {
    title: '',
    description: '',
    price: '',
    category: '',
    isMember: true
}

const CreateAd = () => {
    const [values, setValues] = useState(initialState)
    const { create, isLoading } = useSelector((store) => store.create)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { title, description, price, category } = values
        if (!title || !description || !price || !category) {
            toast.error('Please fill out all fields')
            return
        }

        console.log('title: ' + title)
        dispatch(createAd({
            title,
            description,
            price,
            category
        }))
    }

    return (
        <CreateAdWrapper className="full-register-page">
            <form className="form-create-ad" onSubmit={onSubmit}>
                <FormCreateAd
                    type="title"
                    name="title"
                    value={values.title}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="description"
                    name="description"
                    value={values.description}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="price"
                    name="price"
                    value={values.price}
                    handleChange={handleChange}
                />
                <FormCreateAd
                    type="category"
                    name="category"
                    value={values.category}
                    handleChange={handleChange}
                />
                <button type="submit" className="btn-create-ad" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create' }
                </button>
            </form>
        </CreateAdWrapper>
    )
}

export default CreateAd
