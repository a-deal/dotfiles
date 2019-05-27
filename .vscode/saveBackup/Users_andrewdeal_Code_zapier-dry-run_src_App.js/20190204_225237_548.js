import React, { Component } from "react";
import SearchParams from "./SearchParams";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1>Github Gist Viewer</h1>
          <h2>Search for a user's gists</h2>
        </div>
        <SearchParams />
      </div>
    );
  }
}

export default App;
