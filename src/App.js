import React, { Component } from 'react';
import './App.css';

import TodoItem from '../src/component/todoItem'

class App extends Component {

  constructor(){
    super()

    this.todoItem = [
      "Rua Tay",
      "Rua mat",
      "Rua chan"
    ]


  }

  render(){

    return (
      <div className="App">
        {this.todoItem.map((item, index) => <TodoItem key={index} title={item}/>)}

      </div>
    );

  }
}

export default App;
