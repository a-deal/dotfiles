import React from 'react';

export const Alert = props => {
	return (
		<div className='container align-center'>
			<p className={`alert alert-${props.level}`}>{props.userMsg}</p>
		</div>
	);
};

export const WARN = 'warning';
export const ERROR = 'danger';
export const NoGistsErrorMsg =
	'This user has not created any gists yet, please search again.';
export const NoUserErrorMsg = 'User does not exist. please search again.';
