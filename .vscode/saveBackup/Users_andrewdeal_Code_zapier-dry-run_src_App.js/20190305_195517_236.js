import React, { Component } from 'react';
import { Alert, NoUserErrorMsg, NoGistsErrorMsg, WARN, ERROR } from './Alert';
import client from './GHClient';
import Gist from './Gist';
import Header from './Header';
import SearchParams from './SearchParams';

class App extends Component {
	state = {
		username: '',
		gists: null,
		error: null
	};
	handleUsernameChange = event => {
		event.preventDefault();
		this.setState({ username: event.target.value });
	};
	handleUsernameRequest = event => {
		event.preventDefault();
		client
			.findGistsByUser(this.state.username)
			.then(gists => {
				this.handleGistResults(gists);
			})
			.catch(err => {
				if (err.response && err.response.data.message === 'Not Found') {
					this.setState({ error: NoUserErrorMsg, username: '' });
				}
			});
	};
	handleGistResults = gists => {
		if (gists.length) {
			this.setState({ gists, warning: null });
		} else {
			this.setState({ gists: null, warning: NoGistsErrorMsg });
		}
	};
	render() {
		let { gists, error, username } = this.state;
		if (gists) {
			gists = gists.map(gist => (
				<Gist
					key={gist.id}
					id={gist.id}
					owner={gist.owner.login}
					description={gist.description}
					files={gist.files}
				/>
			));
		}

		return (
			<div className='container'>
				<Header />
				<SearchParams
					username={this.state.username}
					onUsernameSubmit={this.handleUsernameRequest}
					onUsernameChange={this.handleUsernameChange}
				/>
				{gists}
				{error ? (
					<Alert
						level={error === NoUserErrorMsg ? ERROR : WARN}
						userMsg={error}
					/>
				) : null}
			</div>
		);
	}
}

export default App;