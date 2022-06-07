import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import AppProvider from "./AppContext";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </BrowserRouter>
);
