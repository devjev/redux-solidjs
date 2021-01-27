import ChildDisplay from "./ChildDisplay";
import store from "./store";

export function App() {
    return (
        <main>
            <button onClick={() => store.dispatch({ type: "increment" })}>+</button>
            <button onClick={() => store.dispatch({ type: "decrement" })}>-</button>
            <ChildDisplay boundTo="counter" />
        </main>
    );
}

export default App;