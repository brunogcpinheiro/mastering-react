console.log("Exercise is running...");

const state = {
  show: false
};

const onHandleVisibility = () => {
  state.show = !state.show;
  render();
};

const render = () => {
  const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onHandleVisibility}>{state.show ? "Hide details" : "Show details"}</button>
        {state.show && <p>This message shows and disappears!</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("root");

render();