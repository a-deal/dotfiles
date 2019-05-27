import React from "react";

class SearchParams extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="form-control col col-sm-4 col-sm-offset-4">
						<label>Enter GitHub username:</label>
						<input type="text" placeholder="E.g. octocat" />
					</div>
				</div>
				<div className="row">
					<div className="col col-sm-4 col-sm-offset-4">
						<button className="button-primary">Search</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchParams;
