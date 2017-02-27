import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './action/action'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'
import {Footer} from './component/Footer';
class App extends Component {

    render() {
        const {dispatch, visibilityTodos, visibilityFilter,}=this.props;
        return (
            <div>
                <AddTodo onAdd={text=>dispatch(addTodo(text))}/>
                <TodoList todos={visibilityTodos}
                          onTodo={index=>dispatch(toggleTodo(index))}
                />
                <Footer filter={visibilityFilter}
                        onSet={filter=>dispatch(setVisibilityFilter(filter))}
                />
            </div>
        )
    }

}
const todoSelect = (todos, filter) => {

    switch (filter) {
        case VisibilityFilters.SHOW_ACTIVE:
            console.log(filter)
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ALL:
            return todos;
        default: return todos
    }
};
const selet = (state) => {
    console.log(state);
    return {
        visibilityTodos: todoSelect(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(selet)(App)
