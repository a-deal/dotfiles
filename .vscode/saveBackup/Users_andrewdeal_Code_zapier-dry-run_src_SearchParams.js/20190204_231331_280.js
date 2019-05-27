import React from "react";

class SearchParams extends React.Component {
	render() {
		return (
			<div className="row">
				<label>Enter GitHub username:</label>
				<div className="col col-sm-3">
					<input type="text" placeholder="E.g. octocat" />
				</div>
				<div className="col col-sm-3">
					<button className="button-primary">Search</button>
				</div>
			</div>
		);
	}
}

export default SearchParams;
