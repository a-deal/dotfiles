import React from 'react';

const FileList = props => {
	return (
		<div className='container'>
			{Object.entries(props.files).map(file => {})}
		</div>
	);
};

export default FileList;
