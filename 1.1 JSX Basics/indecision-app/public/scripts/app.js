"use strict";

console.log("App is running...");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello, World!"
    )
);

var appRoot = document.getElementById("root");

ReactDOM.render(template, appRoot);
