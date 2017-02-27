import React, {Component} from "react";
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo,index)=>
                    <Todo {...todo}
                        key={index}
                          onClick={()=>this.props.onTodo(index)} />
                )}
            </div>
        )
    }
}