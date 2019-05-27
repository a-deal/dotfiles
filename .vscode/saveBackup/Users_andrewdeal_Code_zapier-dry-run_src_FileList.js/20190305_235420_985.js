import React from 'react';
import File from './File';

const FileList = props => {
	console.log(props.files);
	return (
		<div>
			{props.files.map(file => {
				<File
					contents={file.contents}
					name={file.filename}
					lang={file.language}
					rawURL={file.raw_url}
				/>;
			})}
			<section className='section-primary'>
				<code />
			</section>
		</div>
	);
};

export default FileList;
