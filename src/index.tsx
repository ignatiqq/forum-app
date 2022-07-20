import React from "react";
import { createRoot } from "react-dom/client";

import { AppThemeProvider } from "@layouts/index";
import App from "./App";
import GlobalStyle from "@styles/global";

const root = createRoot(document.getElementById("root")!);

const Root =  (
    <AppThemeProvider>
        <>
            <GlobalStyle />
            <App />
        </>
    </AppThemeProvider>
);

root.render(Root);