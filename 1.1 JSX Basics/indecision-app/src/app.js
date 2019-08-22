console.log("App is running...");

const app = {
  name: "Bruno",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>Indecision App</h1>
      <p>{app.name}! Put your life in the hands of computer!</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>You have {app.options.length} things to do!</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
          {app.options.map(option => {
              return <li key={option}>{option}</li>
          })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("root");

render();