import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Suspense, useRef } from "react";
import { Stats } from "@react-three/drei";

import Reference from "./Reference";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={null}>
            <Stats />
            <App />
            <Reference />
        </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
