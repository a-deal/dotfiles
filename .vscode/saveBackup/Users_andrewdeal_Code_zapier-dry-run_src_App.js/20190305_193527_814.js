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
		if (gists && gists.length) {
				gists = gists.map(gist => (
						<Gist
							key={gist.id}
							id={gist.id}
							owner={gist.owner.login}
							description={gist.description}
							files={gist.files}
						/>
					))
    }

		return (
			<div className='container'>
				<Header />
				<SearchParams onGistResults={this.handleGistResults} />
        {gists ? gists : null}
        {warning ?
					<Alert level={WARN} userMsg={NoGistsErrorMsg} />}
			</div>
		);
	}
}

export default App;
