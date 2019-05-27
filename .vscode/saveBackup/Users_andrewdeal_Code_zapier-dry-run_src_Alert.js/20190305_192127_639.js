import React from 'react';

export const Alert = props => {
	return (
		<div className='container align-center'>
			<p className='alert alert-${props.level}'>{props.userMsg}</p>
		</div>
	);
};

export const WARN = 'warn';
export const ERROR = 'danger';
export const NoGistsError =
	'This user has not created any gists yet, please search again.';
