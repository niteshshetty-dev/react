function DecreamentButton({ onUpdateClick, disabled }) {
  return (
    <div className="DecButton col-4">
      <button
        type="Button"
        className="btn btn-success"
        onClick={onUpdateClick}
        disabled={disabled}
      >
        Decreament
      </button>
    </div>
  );
}

export default DecreamentButton;
