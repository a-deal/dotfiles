import React from 'react';
import { client, UserNotFoundError } from './GHClient';
import { Alert, NoUserErrorMsg, ERROR } from './Alert';

class SearchParams extends React.Component {
	state = {
		username: '',
		error: null
	};
	clearFormError = () => {
		this.setState({ error: null });
	};
	handleUsernameSubmit = event => {
		event.preventDefault();
		this.clearFormError();
		client
			.findGistsByUser(this.state.username)
			.then(gists => {
				this.props.onGistResults(gists);
			})
			.catch(err => {
				if (err.response && err.response.data.message === UserNotFoundError) {
					this.setState({ error: UserNotFoundError, username: '' });
				}
			});
	};
	handleUsernameChange = event => {
		event.preventDefault();
		this.setState({ username: event.target.value });
	};
	render() {
		const { error } = this.state;
		let userError;
		if (error && error === UserNotFoundError) {
			userError = (
				<Alert level={}
			);
		}
		return (
			<div className='container align-center'>
				<div className='row'>
					<div className='form-control col col-sm-4 col-sm-offset-4'>
						<fieldset form='search-by-user'>
							<label>Enter a GitHub username:</label>
							<input
								onChange={this.handleUsernameChange}
								type='text'
								value={this.state.username}
								placeholder='E.g. octocat'
							/>
						</fieldset>
					</div>
				</div>
				<div className='row'>
					<div className='col col-sm-4 col-sm-offset-4'>
						<form id='search-by-user' onSubmit={this.handleUsernameSubmit}>
							<button className='button-primary'>Search</button>
						</form>
					</div>
				</div>
				{error ? userError : null}
			</div>
		);
	}
}

export default SearchParams;