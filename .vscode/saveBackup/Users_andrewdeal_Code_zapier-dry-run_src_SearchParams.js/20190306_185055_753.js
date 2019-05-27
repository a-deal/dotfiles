import React, { PureComponent } from 'react';

class SearchParams extends PureComponent {
	render() {
		return (
			<div className='row align-center'>
				<div className='form-control col col-sm-4 col-sm-offset-4'>
					<form id='search-by-user' onSubmit={props.onUsernameSubmit}>
						<label>Enter a GitHub username:</label>
						<input
							onChange={props.onUsernameChange}
							type='text'
							value={props.username}
							placeholder='E.g. octocat'
						/>
						<br />
						<button className='button-primary-outlined'>Search</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchParams;
