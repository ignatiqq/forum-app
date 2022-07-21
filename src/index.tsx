import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { AppThemeProvider } from "@layouts/index";
import App from "./App";
import "@styles/global";
import client from "@api/config";

const root = createRoot(document.getElementById("root")!);

const Root =  (
    <ApolloProvider client={client}>
        <AppThemeProvider>
            <Router>
                <App />
            </Router>
        </AppThemeProvider>
    </ApolloProvider>
);

root.render(Root);