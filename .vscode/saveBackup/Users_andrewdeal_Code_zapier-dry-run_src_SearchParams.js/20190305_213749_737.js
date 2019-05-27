import React from 'react';

const SearchParams = props => {
	return (
		<div className='container align-center'>
			<div className='row'>
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

							<button className='button-primary'>Search</button>
						</fieldset>
					</form>
				</div>
			</div>
			<div className='row'>
				<div className='col col-sm-4 col-sm-offset-4' />
			</div>
		</div>
	);
};

export default SearchParams;
