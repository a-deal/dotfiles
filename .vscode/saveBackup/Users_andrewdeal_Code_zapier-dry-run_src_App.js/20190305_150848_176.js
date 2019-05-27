import React, { Component } from 'react';
import SearchParams from './SearchParams';
import Header from './Header';
import { client, UserNotFoundError } from './GHClient';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
	state = {
		gists: null
	};
	handleUsernameSubmit = username => {
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
				<ErrorBoundary>
					<SearchParams onUsernameSubmit={this.handleUsernameSubmit} />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
