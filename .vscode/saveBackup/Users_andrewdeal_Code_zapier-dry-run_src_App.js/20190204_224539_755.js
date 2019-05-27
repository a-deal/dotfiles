import React, { Component } from "react";
import SearchParams from "./SearchParams";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">Github Gist Viewer</h1>
          <h2 className="subtitle">Search for a user's gists</h2>
        </header>
        <SearchParams />
      </div>
    );
  }
}

export default App;
