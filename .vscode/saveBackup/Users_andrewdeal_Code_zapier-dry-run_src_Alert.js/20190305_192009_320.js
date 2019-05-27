import React from 'react';

export const Alert = props => {
	return (
		<div className='container align-center'>
			<p className='alert alert-warning'>
				This user has not created any gists yet, please search again.
			</p>
		</div>
	);
};

export const WARN = 'warn';
export const ERROR = 'danger';
