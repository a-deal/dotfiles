import React, { Component } from "react";
import SearchParams from "./SearchParams";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-sm-6 col-sm-offset-3">
            <h1>Github Gist Viewer</h1>
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-6 col-sm-offset-3">
            <h2>Search for a user's gists</h2>
          </div>
        </div>
        <SearchParams />
      </div>
    );
  }
}

export default App;
