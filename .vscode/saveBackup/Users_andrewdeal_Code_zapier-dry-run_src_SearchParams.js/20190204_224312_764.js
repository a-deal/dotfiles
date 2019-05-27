import React from "react";

class SearchParams extends React.Component {
  render() {
    return (
      <div className="row">
        <div class="form-control">
          <label>Normal Field</label>
          <input type="text" placeholder="Enter some info" />
        </div>
      </div>
    );
  }
}

export default SearchParams;
