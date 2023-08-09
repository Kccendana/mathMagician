import PropTypes from 'prop-types';

function Button(props) {
  const { label, className, handleButtonClick } = props;
  return (
    <button type="button" className={className} onClick={handleButtonClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleButtonClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
