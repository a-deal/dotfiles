import React from 'react';

export const Alert = props => {
	return (
		<div className='row align-center'>
			<div className='col col-sm-6 col-sm-offset-3'>
				<p className={`alert alert-${props.level}`}>{props.userMsg}</p>
			</div>
		</div>
	);
};

export const WARN = 'warning';
export const ERROR = 'danger';
export const INFO = 'info';
export const NoGistsErrorMsg =
	'This user has not created any gists yet, please search again.';
export const NoUserErrorMsg = 'User does not exist, please search again.';
export const LoadingMsg = 'Loading...';
