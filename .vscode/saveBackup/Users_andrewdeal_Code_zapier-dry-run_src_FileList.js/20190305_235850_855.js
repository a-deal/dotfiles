import React from 'react';
import File from './File';

const FileList = props => {
	console.log(props.files);
	return (
		<div>
			{props.files.map(file => {
				return (
					<File
						key={file.raw_url}
						contents={file.contents}
						name={file.filename}
						lang={file.language}
						rawURL={file.raw_url}
					/>
				);
			})}
		</div>
	);
};

export default FileList;
