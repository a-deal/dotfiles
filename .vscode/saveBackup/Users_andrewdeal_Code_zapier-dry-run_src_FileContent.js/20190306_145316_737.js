import React from 'react';

const FileContent = props => {
	const { name, lang, content, onToggleModal, rawURL } = props;
	return (
		<div className='modal-mask'>
			<div style={{ width: '960px', 'max-width': '960px' }} className='modal'>
				<div className='modal-head'>
					<p className='modal-title'>{name}</p>
				</div>
				<div
					className='modal-body'
					style={{ 'max-height': '70vh', overflow: 'scroll' }}
				>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
				</div>
				<div className='modal-footer'>
					<button onClick={onToggleModal} className='button-primary'>
						Return
					</button>
					<button className='button-primary-outlined float-right'>
						<a href={rawURL}>View Raw Source</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FileContent;
