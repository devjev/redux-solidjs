import { fromStore } from "./store";

export function ChildDisplay(props) {
    const value = fromStore(props.boundTo);
    return (
        <div style="background-color:#c3c3c3">
            {value()}
        </div>
    );
}

export default ChildDisplay;