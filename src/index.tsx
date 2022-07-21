import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { AppThemeProvider } from "@layouts/index";
import App from "./App";
import "@styles/global";

const root = createRoot(document.getElementById("root")!);

const Root =  (
    <AppThemeProvider>
        <Router>
            <App />
        </Router>
    </AppThemeProvider>
);

root.render(Root);