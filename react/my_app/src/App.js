import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos : [
      {
          id : 1,
          title: 'take out the trash',
          completed : false
      }, {
          id : 2,
          title: 'dinner with friends',
          completed : true
      }, {
          id : 3,
          title: 'meeting with boss',
          completed : false
      },
    ]
  }

  //toggle complete
  markComplete = (id) =>{
    this.setState({todos : this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // delete todo 
  deleteTodo = (id) => {
    console.log(id)
    this.setState({todos : [...this.state.todos.filter(todo =>todo.id !== id)] });
  }
  render () {
      return (
      <div className='App'>
        <Header></Header>
        <Todos todos = {this.state.todos}
         markComplete = {this.markComplete} 
         deleteTodo = {this.deleteTodo}></Todos>
         
      </div>
    );
  }
}

export default App;
