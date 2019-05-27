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
		const { gists } = this.state;
		return (
			<div className='container'>
				<Header />
				<SearchParams onGistResults={this.handleGistResults} />
				{gists ? gists.map(gist => <code key={gist.id}>{gist}</code>) : null}
			</div>
		);
	}
}

export default App;
