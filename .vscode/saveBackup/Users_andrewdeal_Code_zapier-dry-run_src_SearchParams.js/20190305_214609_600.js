import React from 'react';

const SearchParams = props => {
	return (
		<div className='container align-center'>
			<div className='row align-center'>
				<div className='form-control col col-sm-4 col-sm-offset-4'>
					<form id='search-by-user' onSubmit={props.onUsernameSubmit}>
						<fieldset form='search-by-user'>
							<label>Enter a GitHub username:</label>
							<input
								onChange={props.onUsernameChange}
								type='text'
								value={props.username}
								placeholder='E.g. octocat'
							/>
							<br />
							<button className='button-primary'>Search</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SearchParams;
