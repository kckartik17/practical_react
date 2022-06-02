import React, { Component } from "react";
import "./App.css";

const Body = (props) => (
  <p className="App-intro">
    <div>{props.text}</div>
    <div>{props.myFunc(50, 10)}</div>
  </p>
);

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.title}</h1>
        <h1 className="App-title">{this.props.num}</h1>
        <h1 className="App-title">{this.props.myArr[0]}</h1>
        <h1 className="App-title">{JSON.stringify(this.props.myObj)}</h1>
        <h1 className="App-title">
          {JSON.stringify(this.props.myFunc(10, 20))}
        </h1>
      </header>
    );
  }
}

class App extends Component {
  add(a, b) {
    return a + b;
  }
  render() {
    return (
      <div className="App">
        <Header
          title="Hello"
          num={5}
          myArr={[10, 20, 30]}
          myObj={{ hello: "world", hello2: "world2" }}
          myFunc={(a, b) => a + b}
        />
        <Body text="I am cool" myFunc={this.add} />
      </div>
    );
  }
}

export default App;
