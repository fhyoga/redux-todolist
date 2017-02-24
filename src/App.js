import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters} from './action/action'
import AddTodo from './component/AddTodo'
class App extends Component {

  render() {
    const {dispatch,visibleTodos,visibilityFilter}=this.props
    return (
     <div>
       <AddTodo onAddClick={(text)=>
                    dispatch(addTodo(text))
       }/>
     </div>
    );
  }
}

export default App;