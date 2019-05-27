import React from 'react';

const FileList = props => {
	console.log(props.files);
	return (
		{props.files.map(file => {
			<File contents={file.contents} name={file.filename} lang={file.language} rawURL={file.raw_url}/>
		})}
		<div className='container'>
			<section className='section-primary'>
			<code>

			</code>
			</section>
		</div>
	);
};

export default FileList;
