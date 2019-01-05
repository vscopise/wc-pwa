import React, { addReducer, setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

import * as Constants from './assets/constants'

import './index.css';

setGlobal({
    jwtToken: '',
    isLoading: true,
    products: [],
    cart: [],
});

// Reducers
addReducer('fetchToken', () =>
    fetch(Constants.apiUrl + 'jwt-auth/v1/token', {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({
          username: Constants.username,
          password: Constants.password
        })
      })
      .then(res => res.json())
      .then(data => ({
          jwtToken: data.token,
          isLoading: false,
      }))
      .catch(error => console.log(error))
);
addReducer('cartItems', () =>
      return {4};
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
