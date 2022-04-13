import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// MOUNT FUNCTION TO START UP THE APP
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// IF WE ARE IN DEVELOPMENT AND IN ISOLATION,
// CALL MOUNT INMEDIATELY
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// WE ARE RUNNING THROUGH CONTAINER
// AND WE SHOULD EXPORT MOUNT FUNCTION

export { mount };
