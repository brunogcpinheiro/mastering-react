console.log("App is running...");

const template = (
    <div>
        <h1>Hello, World!</h1>
        <p>This is pretty awesome!</p>
    </div>
);

const appRoot = document.getElementById("root");

ReactDOM.render(template, appRoot);