import React from 'react';
import { client, UserNotFoundError } from './GHClient';

class SearchParams extends React.Component {
	state = {
		username: '',
		error: null
	};
	handleUsernameSubmit = event => {
		event.preventDefault();
		client
			.findGistsByUser(this.state.username)
			.then(gists => {
				this.setState({ gists });
			})
			.catch(err => {
				if (err.response && err.response.data.message === UserNotFoundError) {
					this.setState({ error: UserNotFoundError });
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
				<p className='alert alert-danger'>
					User does not exist. please try again
				</p>
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
