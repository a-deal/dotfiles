import React from "react";

class SearchParams extends React.Component {
	render() {
		return (
      <div className="container">
      </div>
			<div className="row">
				<div className="col col-sm-3">
					<label>Enter GitHub username:</label>
					<input type="text" placeholder="E.g. octocat" />
					<button className="button-primary">Search</button>
				</div>
			</div>
		);
	}
}

export default SearchParams;
