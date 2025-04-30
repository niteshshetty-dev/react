function ResetButton({ onUpdateClick, disabled }) {
  return (
    <div className="ResetButton col-4">
      <button
        type="Button"
        className="btn btn-primary"
        onClick={onUpdateClick}
        disabled={disabled}
      >
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
