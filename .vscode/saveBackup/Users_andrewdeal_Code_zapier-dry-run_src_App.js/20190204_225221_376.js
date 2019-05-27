import React, { Component } from "react";
import SearchParams from "./SearchParams";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1 className="title">Github Gist Viewer</h1>
          <h2 className="subtitle">Search for a user's gists</h2>
        </div>
        <SearchParams />
      </div>
    );
  }
}

export default App;
