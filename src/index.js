import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

import * as Constants from './constants'

import './index.css';

setGlobal({
    apiUrl: Constants.apiUrl,
    username: Constants.username,
    password: Constants.password,
    jwtToken: '',
    products: []
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
