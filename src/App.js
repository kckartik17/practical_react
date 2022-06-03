import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
class App extends Component {
  state = {
    visible: true,
  };
  render() {
    return (
      <div className="App">
        <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter initialCount={0} />
        </div>
        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                visible: !state.visible,
              }))
            }>
            Toggle Counter
          </button>
        </div>
      </div>
    );
  }
}

export default App;
