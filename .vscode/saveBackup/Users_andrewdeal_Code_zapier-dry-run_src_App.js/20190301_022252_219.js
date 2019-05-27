import React, { PureComponent } from 'react';
import {
	INFO,
	NoUserErrorMsg,
	NoGistsErrorMsg,
	WARN,
	ERROR,
	LoadingMsg,
	DuplicateFavorite
} from './UserMessages';
import { Provider } from './FavoriteContext';
import client from './GHClient';
import Alert from './Alert';
import GistList from './GistList';
import Header from './Header';
import SearchParams from './SearchParams';
import Favorites from './Favorites';

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
		favorites: {}
	};
	handleRemoveFavorite = event => {
		const { filename } = event.target.dataset;
		this.setState(prevState => {
			const updatedFavorites = Object.assign({}, prevState.favorites);
			delete updatedFavorites[filename];
			return {
				favorites: updatedFavorites
			};
		});
	};
	handleAddFavorite = event => {
		const {
			owner,
			filename: name,
			rawurl,
			content,
			lang
		} = event.target.dataset;
		if (name in this.state.favorites) {
			alert(DuplicateFavorite);
			return;
		}
		this.setState(prevState => {
			return {
				favorites: {
					...prevState.favorites,
					[name]: {
						owner,
						name,
						rawurl,
						lang,
						content
					}
				}
			};
		});
	};
	handleUsernameInput = event => {
		event.preventDefault();
		this.setState({ username: event.target.value });
	};
	handleGistsRequest = event => {
		event.preventDefault();
		this.setState({ error: null, gists: null, isLoading: true });
		client
			.findGistsByUser(this.state.username)
			.then(gists => {
				if (gists.length) {
					this.setState({ gists });
				} else {
					this.setState({
						error: { message: NoGistsErrorMsg, level: WARN }
					});
				}
			})
			.catch(err => {
				if (err.response && err.response.data.message === 'Not Found') {
					this.setState({
						error: { message: NoUserErrorMsg, level: ERROR }
					});
				}
			})
			.then(() => this.setState({ username: '', isLoading: false }));
	};
	render() {
		let { gists, error, favorites, username, isLoading } = this.state;
		return (
			<div className='container-large' style={styles.body}>
				<section style={styles.section}>
					<Header />
					<SearchParams
						username={username}
						onUsernameSubmit={this.handleGistsRequest}
						onUsernameInput={this.handleUsernameInput}
					/>
				</section>
				<div className='row row-reverse'>
					<div className='col col-sm-10'>
						{gists ? (
							<Provider value={this}>
								<GistList gists={gists} />
							</Provider>
						) : null}
						{isLoading ? <Alert level={INFO} userMsg={LoadingMsg} /> : null}
						{error ? (
							<Alert level={error.level} userMsg={error.message} />
						) : null}
					</div>
					<div className='col col-sm-2'>
						<Provider value={this}>
							<Favorites files={favorites} />
						</Provider>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
