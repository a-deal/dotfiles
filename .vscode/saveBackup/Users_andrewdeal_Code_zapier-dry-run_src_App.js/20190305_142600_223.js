import React, { Component } from 'react';
import SearchParams from './SearchParams';
import Header from './Header';
import client from './GHClient';

class App extends Component {
	handleUsernameSubmit = username => {
		// Request gists by user from GH api
		// Render GistList component if any, otherwise notify no gists or user exists
		client.findGistsByUser();
	};
	componentDidMount() {
		client.findGistsByUser('okto').then(console.log);
	}
	render() {
		return (
			<div className='container'>
				<Header />
				<SearchParams onUsernameChange={this.handleUsernameChange} />
			</div>
		);
	}
}

export default App;
