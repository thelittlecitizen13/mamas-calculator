import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';

// Actions
const addInput = () => {
  return {
    type: 'ADDINPUT'
  }
}

const clearInput = () => {
  return {
    type: 'CLEARINPUT'
  }
}

// Reducer
const input = (state = 0, action) =>{
    switch(action.type){
      case 'ADDINPUT':
        return state;
      case 'CLEARINPUT':
        state = '';
        return state;
    }
}

// Creating the store
let store = createStore(input);

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(addInput());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

