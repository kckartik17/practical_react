import React from "react";

export const Body = (props) => (
  <p className="App-intro">
    <div>{props.text}</div>
    <div>{props.myFunc(50, 10)}</div>
  </p>
);

export const Body2 = () => <div>Body2</div>;
