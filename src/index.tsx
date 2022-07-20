import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "@styles/global";

const root = createRoot(document.getElementById("root")!);

const tree = (
    <>
        <GlobalStyle />
        <App />
    </>
)

root.render(tree);