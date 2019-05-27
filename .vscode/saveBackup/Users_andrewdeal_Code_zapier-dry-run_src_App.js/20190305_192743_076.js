import React, { Component } from 'react';
import { Alert, NoGistsErrorMsg, WARN } from './Alert';
import Gist from './Gist';
import Header from './Header';
import SearchParams from './SearchParams';

class App extends Component {
	state = {
		gists: null
	};
	handleGistResults = gists => {
		this.setState({ gists });
	};
	render() {
		let { gists } = this.state;
		if (gists) {
			gists = gists.length ? (
				gists.map(gist => (
					<Gist
						key={gist.id}
						id={gist.id}
						owner={gist.owner.login}
						description={gist.description}
						files={gist.files}
					/>
				))
			) : (
				<Alert level={WARN} userMsg={NoGistsErrorMsg} />
			);
		}
		return (
			<div className='container'>
				<Header />
				<SearchParams onGistResults={this.handleGistResults} />
				{gists ? gists : null}
			</div>
		);
	}
}

export default App;
