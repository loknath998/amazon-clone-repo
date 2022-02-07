import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import "./fonts/FiraSansCondensed-SemiBold.ttf";
import "./fonts/AmazonEmberRegular.ttf";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDom.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById("root")
);
