import PropTypes from "Prop-types";

function Button({ onClick }) {
  return (
    <div>
      <button type="btn" className="btn btn-primary" onClick={onClick}>
        Click
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
