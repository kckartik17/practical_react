import React from "react";
import User from "./User";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };
  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      people: data.results,
      loading: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.people ? (
          <div>Loading....</div>
        ) : (
          this.state.people.map((person, i) => (
            <User key={person.name.first + person.name.last} user={person} />
          ))
        )}
      </div>
    );
  }
}
