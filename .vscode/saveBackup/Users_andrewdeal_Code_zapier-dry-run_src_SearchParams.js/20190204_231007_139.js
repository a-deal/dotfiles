import React from "react";

class SearchParams extends React.Component {
	render() {
		return (
			<div className="container row">
				<form>
					<div className="col col-sm-4">
						<div className="form-control">
							<label>Enter GitHub username:</label>
							<input type="text" placeholder="E.g. octocat" />
						</div>
					</div>
					<div className="col col-sm-4">
						<button className="button-primary">Search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchParams;
