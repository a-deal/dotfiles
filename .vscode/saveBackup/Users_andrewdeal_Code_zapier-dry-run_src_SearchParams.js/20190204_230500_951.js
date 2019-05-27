import React from "react";

class SearchParams extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col col-sm-4 col-sm-offset-4">
          <form>
            <div className="form-control">
              <label>Enter GitHub username:</label>
              <input type="text" placeholder="E.g. octocat" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchParams;
