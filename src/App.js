import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "slider",
  };
  render() {
    // if (this.state.whichComponentToShow === "slider") {
    //   return <ImageSlider />;
    // }
    const buttonText = this.state.visible ? "Show Counter" : "Show ImageSlider";
    return (
      <div className="App">
        {this.state.visible ? <ImageSlider /> : <Counter initialCount={0} />}
        <button
          onClick={() =>
            this.setState((state) => ({ visible: !state.visible }))
          }>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
