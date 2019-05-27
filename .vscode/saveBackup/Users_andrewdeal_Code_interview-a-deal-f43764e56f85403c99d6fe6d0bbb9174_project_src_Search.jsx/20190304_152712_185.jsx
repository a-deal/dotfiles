import React, { PureComponent } from 'react';

class Search extends PureComponent {
	render() {
		return (
			<div className='row align-center'>
				<div className='form-control col col-sm-4 col-sm-offset-4'>
					<form id='search-by-user' onSubmit={this.props.onUsernameSubmit}>
						<label>Enter a GitHub username:</label>
						<input
							onChange={this.props.onUsernameInput}
							type='text'
							value={this.props.username}
							placeholder='E.g. octocat'
						/>
						<br />
						<button
							aria-label='Search for gists by GitHub username'
							className='button-primary-outlined'
						>
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchParams;
s
