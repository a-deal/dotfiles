import React, { Component } from 'react';
import SearchParams from './SearchParams';
import Header from './Header';
import client from './GHClient';

class App extends Component {
	state = {
		gists: []
	};
	handleUsernameSubmit = username => {
		// Request gists by user from GH api
		// Render GistList component if any, otherwise notify no gists or user exists
		client
			.findGistsByUser(username)
			.then(console.log)
			.catch(console.log);
	};
	render() {
		return (
			<div className='container'>
				<Header />
				<SearchParams onUsernameSubmit={this.handleUsernameSubmit} />
			</div>
		);
	}
}

export default App;
