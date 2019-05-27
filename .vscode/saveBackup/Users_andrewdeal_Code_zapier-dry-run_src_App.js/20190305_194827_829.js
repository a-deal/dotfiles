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
	handleUsernameSubmit = event => {
		event.preventDefault();
		this.clearFormError();
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
		let { gists, warning } = this.state;
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
				<SearchParams onGistResults={this.handleGistResults} />
				{gists}
				{warning ? <Alert level={WARN} userMsg={NoGistsErrorMsg} /> : null}
			</div>
		);
	}
}

export default App;
