"use strict";

console.log("Exercise is running...");

var state = {
  show: false
};

var onHandleVisibility = function onHandleVisibility() {
  state.show = !state.show;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: onHandleVisibility },
      state.show ? "Hide details" : "Show details"
    ),
    state.show && React.createElement(
      "p",
      null,
      "This message shows and disappears!"
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("root");

render();
