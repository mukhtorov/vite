import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
