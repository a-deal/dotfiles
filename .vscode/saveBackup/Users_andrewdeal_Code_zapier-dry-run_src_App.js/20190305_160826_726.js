import React, { Component } from 'react';
import Header from './Header';
import SearchParams from './SearchParams';

class App extends Component {
	state = {
		gists: null
	};
	handleGistResults = gists => {
		this.setState({ gists });
	};
	render() {
		return (
			<div className='container'>
				<Header />
				<SearchParams onGistResults={this.handleGistResults} />
				{this.state.gists}
			</div>
		);
	}
}

export default App;
