"use strict";

console.log("App is running...");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello, World!"
    ),
    React.createElement(
        "p",
        null,
        "This is pretty awesome!"
    )
);

var appRoot = document.getElementById("root");

ReactDOM.render(template, appRoot);
