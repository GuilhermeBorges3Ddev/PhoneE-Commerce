import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import of route files here and in the App.js */
import {BrowserRouter as Router} from 'react-router-dom';

/* The high component whart has to be imported is here, it'll encapsulate App. main component*/
import {ProductProvider} from './context';

import * as serviceWorker from './serviceWorker';

/* Applying here the Router component imported */
ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
