import React from 'react';

const FileContent = props => {
	const { name, lang, content } = props;
	return (
		<div className='modal-mask'>
			<div className='modal'>
				<div className='modal-head'>
					<p className='modal-title'>{name}</p>
				</div>
				<div className='modal-body'>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
				</div>
				<div className='modal-footer align-center'>
					<button className='button-primary'>Save</button>
				</div>
			</div>
		</div>
	);
};

export default FileContent;
