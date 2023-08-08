import PropTypes from 'prop-types';

function Button(props) {
  const { label, className } = props;
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
