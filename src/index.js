import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import  { Provider }from 'react-redux'
import todoApp from './reducer/reducer';
const add=(state=1,action)=> {
    if (action.type === 'add') {
        return state + 1

    }
};
let store = createStore(add);
const render=()=> {
    ReactDOM.render(
        <App value={store.getState()} onAdd={() => store.dispatch({type: 'add'})}/>,
        document.getElementById('root')
    );
};
render()
store.subscribe(render)

