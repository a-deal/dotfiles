import React, { Component } from "react";
import SearchParams from "./SearchParams";

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row align-center">
					<div className="col col-sm-6 col-sm-offset-3">
						<h1>Github Gist Viewer</h1>
						<p>Your trusted guide to viewing a user's gists</p>
						<hr />
					</div>
				</div>
				<SearchParams />
			</div>
		);
	}
}

export default App;