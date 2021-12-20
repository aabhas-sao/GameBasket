import { createStore } from 'redux';

const reducer = (state = 0, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

store.dispatch({ type: "INCREMENT" });

store.subscribe(() => console.log(store.getState()));