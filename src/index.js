import reportWebVitals from './reportWebVitals';
import store from './components/Redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { addMessage } from './components/Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </React.StrictMode>
        </BrowserRouter>
    );
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

reportWebVitals();
