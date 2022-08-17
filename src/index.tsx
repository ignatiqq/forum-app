import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import "@styles/global";
import store from "./store";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

const Root =  (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

root.render(Root);