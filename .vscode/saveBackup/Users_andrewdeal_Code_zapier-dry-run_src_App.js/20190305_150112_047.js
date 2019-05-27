import React, { Component } from 'react';
import SearchParams from './SearchParams';
import Header from './Header';
import { client, UserNotFoundError } from './GHClient';

class App extends Component {
	state = {
		gists: null
	};
	handleUsernameSubmit = username => {
		// Request gists by user from GH api
		// Render GistList component if any, otherwise notify no gists or user exists
		client
			.findGistsByUser(username)
			.then(gists => {
				if (!gists.length) {
					throw new Error('User has owns no gists');
				}
				this.setState({ gists });
			})
			.catch(err => {
				if (err.response) {
					console.log(err.response.data);
				}
			});
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
