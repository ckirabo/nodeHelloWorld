import React, { Component } from 'react';
import Header from './header.js';
import Content from './content.js';


class App extends Component {

constructor(){
  super();
  this.state = {
    header : "HELLO WORLD from Props",
    content: "hello world from props"
  }
  this.function = () => this.setState({
   header: "hello",
   content:"WORLD"
    });
}
  render() {
    return (
      <div>
      <Header headerProp={this.state.header}/>
      <Content contentProp={this.state.content}/>
      <button onClick={this.function}>
      Click Me </button>
      </div>
    );
  }
}

export default App;
