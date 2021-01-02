import * as serviceWorker from './serviceWorker';
import store from "./redux/state.js"
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
