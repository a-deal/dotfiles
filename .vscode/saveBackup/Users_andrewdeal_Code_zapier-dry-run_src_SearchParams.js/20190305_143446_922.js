import React from 'react';

class SearchParams extends React.Component {
	state = {
		username: ''
	};
	handleUsernameSubmit = event => {
		event.preventDefault();
		console.log(`Submitting: ${this.state.username}`);
		this.props.onUsernameSubmit(this.state.username);
	};
	handleUsernameChange = event => {
		event.preventDefault();
		this.setState({ username: event.target.value });
	};
	render() {
		return (
			<div className='container align-center'>
				<div className='row'>
					<div className='form-control col col-sm-4 col-sm-offset-4'>
						<fieldset form='search-by-user'>
							<label>Enter a GitHub username:</label>
							<input
								onChange={this.onUsernameChange}
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
			</div>
		);
	}
}

export default SearchParams;
