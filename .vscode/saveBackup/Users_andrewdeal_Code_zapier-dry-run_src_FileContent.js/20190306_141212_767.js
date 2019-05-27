import React from 'react';

const FileContent = props => {
	return (
		<div class='modal-mask'>
			<div class='modal'>
				<div class='modal-head'>
					<p class='modal-title'>Modal Example</p>
				</div>
				<div class='modal-body'>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
				</div>
				<div class='modal-footer'>
					<button class='button-primary'>Save</button>
				</div>
			</div>
		</div>
	);
};

export default FileContent;
