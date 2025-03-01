import { context } from "./Store";

function TotalComponent() {
  return (
    <div className="container">
      <div>
        <h3>Total</h3>
      </div>
      <hr />
      <div>
        <context.Consumer>
          {({ state }) => <p>Total: {state.total}</p>}
        </context.Consumer>
      </div>
    </div>
  );
}

export default TotalComponent;
