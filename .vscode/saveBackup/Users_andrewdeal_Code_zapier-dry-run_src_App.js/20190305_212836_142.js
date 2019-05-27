import React, { Component } from 'react';
import { Alert, NoUserErrorMsg, NoGistsErrorMsg, WARN, ERROR, LoadingMsg } from './Alert';
import client from './GHClient';
import GistList from './GistList';
import Header from './Header';
import SearchParams from './SearchParams';

class App extends Component {
	state = {
		username: '',
		gists: null,
		error: null,
		isLoading: false
	};
	handleUsernameChange = event => {
		event.preventDefault();
		this.setState({ username: event.target.value });
	};
	handleUsernameRequest = event => {
		event.preventDefault();
		this.setState({ error: null, gists: null, isLoading: true });
		client
			.findGistsByUser(this.state.username)
			.then(gists => {
				this.handleGistResults(gists);
			})
			.catch(err => {
				if (err.response && err.response.data.message === 'Not Found') {
					this.setState({ error: NoUserErrorMsg });
				}
			})
			.then(() => this.setState({ username: '', isLoading: false }));
	};
	handleGistResults = gists => {
		if (gists.length) {
			this.setState({ gists });
		} else {
			this.setState({ error: NoGistsErrorMsg });
		}
	};
	render() {
    let { gists, error, username, isLoading } = this.state;
		return (
			<div className='container'>
				<Header />
				<SearchParams
					username={username}
					onUsernameSubmit={this.handleUsernameRequest}
					onUsernameChange={this.handleUsernameChange}
				/>
        {isLoading ? (<Alert level=INFO userMsg={LoadingMsg}):
				({gists ? <GistList gists={gists} /> : null}
				{error ? (
					<Alert
						level={error === NoUserErrorMsg ? ERROR : WARN}
						userMsg={error}
					/>
        ) : null})
        }
			</div>
		);
	}
}

export default App;
