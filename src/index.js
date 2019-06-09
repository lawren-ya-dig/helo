import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import reducers from './Redux/reducer';

const composeEnhancers = compose;

const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <App />
            </Switch>
        </Provider>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

