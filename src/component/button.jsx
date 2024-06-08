
import PropTypes from 'prop-types';


const Button = ({ text, onClick, type = 'button', className = '' }) => {
    return (
      <button onClick={onClick} className={`btn ${className}`} type={type}>
        {text}
      </button>
    );
};
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
};

export default Button