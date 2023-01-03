import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const rootElement = document.querySelector('#root');


// 3. Подключение API
ReactDOM.render((
    <>
    <Provider store={store}>
        <App />
    </Provider>
    </>

), 
    rootElement);
