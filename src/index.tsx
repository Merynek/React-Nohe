import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react';
import App from './App';
import authStore from './stores/authStore';
import userStore from './stores/userStore';
import * as serviceWorker from './serviceWorker';

const stores = {
    authStore,
    userStore
};

ReactDOM.render(
<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
