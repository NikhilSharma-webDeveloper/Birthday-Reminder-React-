import React from "react";
import ReactDom from "react-dom";
import { Container } from "./components/container";

// importing CSS
import "./index.css";

export const Main = () => {
    return (<><Container></Container> </>);
}

ReactDom.render(<Main></Main>, document.getElementById("root"))

