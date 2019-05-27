import React, { Component } from "react";
import SearchParams from "./SearchParams";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<SearchParams />
			</div>
		);
	}
}

export default App;
