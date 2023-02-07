import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
