export const handleImageChange = (event, setValues, toast) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const image = event.target.name;

    reader.onload = () => {
        const imageData = reader.result.split(',')[1];
        const isPng = file.type === 'image/jpeg';
        isPng
            ? setValues((prev) => ({ ...prev, [image]: imageData }))
            : toast.error('Wrong image format. Please upload a .JPG image.');
    };

    reader.readAsDataURL(file);
};
