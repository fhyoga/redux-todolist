import React,{Component} from 'react';

export default class Todo extends Component{
    render(){
        return (
            <div>
                <h5 onClick={this.props.onClick}
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none',
                        cursor: this.props.completed ? 'default' : 'pointer'
                    }} >
                {this.props.text}</h5>
            </div>
        )
    }
}