import React from 'react';
import FileDetails from './FileDetails';

const FileList = props => {
	console.log(props.files);
	return (
		<tbody>
			{props.files.map(file => {
				return (
					<FileDetails
						key={file.raw_url}
						content={file.content}
						name={file.filename}
						lang={file.language}
						rawURL={file.raw_url}
						size={file.size}
					/>
				);
			})}
		</tbody>
	);
};

export default FileList;
