import { useSelector } from "react-redux";

function TotalComponent() {
  const total = useSelector((state) => state.pr.total);
  return (
    <div className="container">
      <div>
        <h3>Total</h3>
      </div>
      <hr />
      <div>
        <p>Total:{total} </p>
      </div>
    </div>
  );
}

export default TotalComponent;
