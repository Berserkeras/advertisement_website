import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./Store";
import {Provider} from "react-redux";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App tab="home" />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
