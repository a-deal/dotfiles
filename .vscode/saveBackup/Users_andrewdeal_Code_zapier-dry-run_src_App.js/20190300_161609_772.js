import React, { PureComponent } from 'react';
import {
	INFO,
	NoUserErrorMsg,
	NoGistsErrorMsg,
	WARN,
	ERROR,
	LoadingMsg
} from './UserMessages';
import { Provider } from './FavoriteContext';
import client from './GHClient';
import Alert from './Alert';
import GistList from './GistList';
import Header from './Header';
import SearchParams from './SearchParams';

const styles = {
	section: {
		color: 'white',
		backgroundColor: '#4caf50'
	},
	body: {
		fontFamily: `'Averia Libre','Open Sans',sans-serif`
	}
};
class App extends PureComponent {
	state = {
		username: '',
		gists: null,
		error: null,
		isLoading: false,
		favorites: []
	};
	handleAddFavorite = event => {
		console.log('Click!');
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
			<div className='container-large' style={styles.body}>
				<section style={styles.section}>
					<Header />
					<SearchParams
						username={username}
						onUsernameSubmit={this.handleUsernameRequest}
						onUsernameChange={this.handleUsernameChange}
					/>
				</section>
				{isLoading ? <Alert level={INFO} userMsg={LoadingMsg} /> : null}
				{gists ? (
					<Provider>
						<GistList gists={gists} />
					</Provider>
				) : null}
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
