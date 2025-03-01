function IncreamentButton({ onUpdateClick, disabled }) {
  return (
    <div className="IncButton col-4">
      <button
        type="Button"
        className="btn btn-danger"
        onClick={onUpdateClick}
        disabled={disabled}
      >
        Increament
      </button>
    </div>
  );
}

export default IncreamentButton;
