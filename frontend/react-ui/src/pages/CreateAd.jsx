import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createAd } from '../features/CreateAdSlice';
import FormCreateAd from '../components/FormCreateAd';
import CreateAdWrapper from '../assets/CreateAdWrapper';

const initialState = {
    title: '',
    description: '',
    price: 0,
    category: '',
    city: '',
    image: null,
};

const CreateAd = () => {
    const [values, setValues] = useState(initialState);
    const { create, isLoading } = useSelector((store) => store.create);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        const image = event.target.name;

        reader.onload = () => {
            const imageData = reader.result.split(',')[1];
            const isPng = file.type === 'image/png';
            isPng
                ? setValues((prev) => ({ ...prev, [image]: imageData }))
                : toast.error('Wrong image format. Please upload a PNG file.');
        };

        reader.readAsDataURL(file);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { title, description, price, category, city, image } = values;

        if (!title || !description || !price || !category || !city) {
            toast.error('Please fill out all fields');
            return;
        }

        dispatch(createAd({ title, description, price, category, city, image }));
    };

    useEffect(() => {
        if (create?.length) {
            setTimeout(() => {
                console.log('show UUID:', create);
                navigate(`/ad-id/${create}`, { state: { create }, replace: true });
            }, 2000);
        }
    }, [create, navigate]);

    return (
        <CreateAdWrapper className="full-register-page">
            <form className="form-register" onSubmit={onSubmit}>
                {[
                    { type: 'title', name: 'title', labelText: 'title' },
                    { type: 'description', name: 'description', labelText: 'description' },
                    { type: 'price', name: 'price', labelText: 'price' },
                    { type: 'city', name: 'city', labelText: 'city' },
                    { type: 'category', name: 'category', labelText: 'category' },
                ].map((input) => (
                    <FormCreateAd key={input.name} {...input} value={values[input.name]} handleChange={handleChange} />
                ))}
                <FormCreateAd type="file" name="image" labelText="image" handleChange={handleImageChange} />
                <button type="submit" className="btn-register" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create'}
                </button>
            </form>
            <button className="btn-choose-register" onClick={() => navigate('/')}>
                Back to Landing Page
            </button>
        </CreateAdWrapper>
    );
};

export default CreateAd;
