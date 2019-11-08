import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import rootReducer from './Store/rootReducer';

const history = createBrowserHistory();

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
      <Router  history={history}>
         <App />
      </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
