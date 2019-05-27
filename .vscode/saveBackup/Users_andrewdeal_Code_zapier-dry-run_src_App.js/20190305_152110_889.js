import React, { Component } from 'react';
import { client, UserNotFoundError } from './GHClient';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import SearchParams from './SearchParams';

class App extends Component {
	state = {
		gists: null
	};
	render() {
		return (
      <div className='container'>
				<Header />
					<SearchParams />
          <div.
				</ErrorBoundary>
		);
	}
}

export default App;
