import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import './index.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import todoApp from './reducer/reducer';

const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
// const listener=()=>{
//     let newState = store.getState();
//     App.setNewState(newState)
// };
// store.subscribe(listener);
// const addClick = (text) => {
//     let action = addTodo(text);
//     store.dispatch(action)
// };

