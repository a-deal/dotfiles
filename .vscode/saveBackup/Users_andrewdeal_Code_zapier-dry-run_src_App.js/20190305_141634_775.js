import React, { Component } from 'react';
import SearchParams from './SearchParams';
import Header from './Header';
import client from './GHClient';

class App extends Component {
	componentDidMount() {
		client.findGistsByUser('okto').then(console.log);
	}
	render() {
		return (
			<div className='container'>
				<Header />
				<SearchParams />
			</div>
		);
	}
}

export default App;
