import PropTypes from 'prop-types'

const FormUpdateAd = ({ type, name, value, handleChange, labelText, placeholder }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                type={type}
                value={value }
                name={name}
                onChange={handleChange}
                className="form-input"
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormUpdateAd

FormUpdateAd.propTypes = {
    type: PropTypes.any,
    title: PropTypes.string,
    imageVal: PropTypes.object,
    handleChange: PropTypes.func,
    labelText: PropTypes.string
}
