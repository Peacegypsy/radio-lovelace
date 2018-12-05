import React, { Component } from "react";
import "./App.css";

import RadioSet from "./components/RadioSet";

import songData from "./data/tracks.json";

songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {
  constructor() {
    super();
    songData.forEach(song => {
      song.state = {
        favorite: false
      };
    });
  }
  onItemChecked = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(target);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} checkedCallback={this.onItemChecked} />
        </main>
      </div>
    );
  }
}

export default App;
