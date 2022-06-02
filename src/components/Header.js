import React from "react";

export class Header extends React.Component {
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
