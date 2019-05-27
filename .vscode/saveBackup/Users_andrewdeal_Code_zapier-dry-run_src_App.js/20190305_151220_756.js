import React, { Component } from 'react';
import { client, UserNotFoundError } from './GHClient';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import SearchParams from './SearchParams';

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

				<ErrorBoundary>

			<div className='container'></div>

				<Header />
					<SearchParams onUsernameSubmit={this.handleUsernameSubmit} />
        </ErrorBoundary>
				</ErrorBoundary>
		);
	}
}

export default App;
