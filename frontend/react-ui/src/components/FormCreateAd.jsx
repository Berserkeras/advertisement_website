import PropTypes from 'prop-types'

const FormCreateAd = ({ type, title, value, handleChange, labelText }) => {
    return (
        <div className="form-row">
            <label htmlFor={title} className="form-label">
                {labelText || title}
            </label>
            <input
                type={type}
                value={value}
                title={title}
                onChange={handleChange}
                className="form-input"
            />
        </div>
    )
}

export default FormCreateAd

FormCreateAd.propTypes = {
    type: PropTypes.any,
    title: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    labelText: PropTypes.string
}
