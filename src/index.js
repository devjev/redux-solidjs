import { render } from "solid-js/dom";
import App from "./App";

function AppWrapper() {
    return <App />;
}

render(AppWrapper, document.getElementById("root"));