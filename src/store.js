import { createStore } from "redux";
import { createSignal } from "solid-js";

function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case "increment": return { counter: state.counter + 1 };
        case "decrement": return { counter: state.counter - 1 };
        default: return state;
    }
}

let store = createStore(counterReducer);

export function fromStore(propertyName) {
    const [signal, setSignal] = createSignal();
    store.subscribe(() => {
        const state = store.getState();
        setSignal(state[propertyName]);
    });
    return signal;
}

export default store;