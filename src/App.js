import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  render() {
    return (
    <h1>Hello World!</h1>
    )
  }
}

const users = [{ name : 'Anna', age : 32}, { name : 'Kathy', age : 44 }, { name : 'Katy', age : 4 }]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld/>
          {users.map((user, i) => (<h1 key={i} >{user.name}</h1>))}
        </header>
      </div>
    );
  }
}

export default App;
