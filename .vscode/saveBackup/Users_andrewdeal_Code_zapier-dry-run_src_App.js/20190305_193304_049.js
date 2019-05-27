import React, { Component } from 'react';
import { Alert, NoGistsErrorMsg, WARN } from './Alert';
import Gist from './Gist';
import Header from './Header';
import SearchParams from './SearchParams';

class App extends Component {
	state = {
		gists: null,
		warning: null
	};
	handleGistResults = gists => {
		if (gists.length) {
			this.setState({ gists });
		} else {
			this.setState({ warning: NoGistsErrorMsg });
		}
	};
	render() {
		let { gists } = this.state;
		if (gists) {
			if (gists.length)
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
