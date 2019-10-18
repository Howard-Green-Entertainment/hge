import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBwLHayQR4UuwdXxXlaCF9_CNV_m9WY1sw",
    authDomain: "howard-green-ent.firebaseapp.com",
    databaseURL: "https://howard-green-ent.firebaseio.com",
    projectId: "howard-green-ent",
    storageBucket: "howard-green-ent.appspot.com",
    messagingSenderId: "702902252490",
    appId: "1:702902252490:web:025456fdc35a0fb3789533",
    measurementId: "G-BN5EMZQCT6"
};

firebase.initializeApp(config);
firebase.analytics();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
