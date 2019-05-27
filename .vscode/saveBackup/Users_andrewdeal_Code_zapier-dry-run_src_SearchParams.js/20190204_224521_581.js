import React from "react";

class SearchParams extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="form-control">
          <label>Search by username:</label>
          <input type="text" placeholder="E.g. octocat" />
        </div>
      </div>
    );
  }
}

export default SearchParams;
