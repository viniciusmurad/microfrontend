import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// MOUNT FUNCTION TO START UP THE APP
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// IF WE ARE IN DEVELOPMENT AND IN ISOLATION,
// CALL MOUNT INMEDIATELY
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// WE ARE RUNNING THROUGH CONTAINER
// AND WE SHOULD EXPORT MOUNT FUNCTION
export { mount };
