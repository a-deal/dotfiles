import React from 'react';
import File from './File';

const FileList = props => {
	console.log(props.files);
	return (
			{props.files.map(file => {
				return (
					<File
						key={file.raw_url}
						content={file.content}
						name={file.filename}
						lang={file.language}
						rawURL={file.raw_url}
					/>
				);
			})}
	);
};

export default FileList;