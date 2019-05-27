import React from 'react';

const SearchParams = props => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='form-control col col-sm-4 col-sm-offset-4'>
					<form id='search-by-user' onSubmit={props.onUsernameSubmit}>
						<fieldset form='search-by-user'>
							<div className='row align-center'>
								<label>Enter a GitHub username:</label>
								<input
									onChange={props.onUsernameChange}
									type='text'
									value={props.username}
									placeholder='E.g. octocat'
								/>
							</div>
							<div className='row'>
								<button className='button-primary'>Search</button>
							</div>
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
