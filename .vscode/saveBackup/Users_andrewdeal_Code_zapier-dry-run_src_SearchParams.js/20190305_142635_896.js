import React from 'react';

class SearchParams extends React.Component {
	state = {
		username: ''
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
						<label>Enter a GitHub username:</label>
						<input
							onChange={this.onUsernameChange}
							type='text'
							placeholder='E.g. octocat'
						/>
					</div>
				</div>
				<div className='row'>
					<div className='col col-sm-4 col-sm-offset-4'>
						<button onSubmit={} type='submit' className='button-primary'>Search</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchParams;
