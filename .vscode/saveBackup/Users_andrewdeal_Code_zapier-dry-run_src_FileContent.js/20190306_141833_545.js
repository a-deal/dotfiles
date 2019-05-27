import React from 'react';

const FileContent = props => {
	const { lang, content } = props;
	return (
		<div className='modal-mask'>
			<div className='modal'>
				<div className='modal-head'>
					<p className='modal-title'>Modal Example</p>
				</div>
				<div className='modal-body'>
					<pre classNameName={`language-${lang}`}>
						<code classNameName={`language-${lang}`}>{content}</code>
					</pre>
				</div>
				<div className='modal-footer'>
					<button className='button-primary'>Save</button>
				</div>
			</div>
		</div>
	);
};

export default FileContent;
