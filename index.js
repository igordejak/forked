import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { default as store } from './app/store/store.js';
import App from './app/container/';
const RootElement = document.getElementById('root');

function Render(rootElement) {

    ReactDOM.render(
        <Provider store = {store}>
            <div>
                <App key = {'Area'} />
            </div>
        </Provider>
        , rootElement
    );
}

Render(RootElement);
