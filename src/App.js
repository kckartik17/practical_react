import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Body, Body2 } from "./components/Body";
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
        <Body2></Body2>
      </div>
    );
  }
}

export default App;
