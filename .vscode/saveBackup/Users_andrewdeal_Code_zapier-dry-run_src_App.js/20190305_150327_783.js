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
				this.setState({ gists });
			})
			.catch(err => {
				if (err.response && err.response.data.message === UserNotFoundError) {
					throw new Error('User does not exist');
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
