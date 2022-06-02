import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Body, Body2 } from "./components/Body";
import Counter from "./components/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialCount={0} />
        <Counter initialCount={100} />
      </div>
    );
  }
}

export default App;
