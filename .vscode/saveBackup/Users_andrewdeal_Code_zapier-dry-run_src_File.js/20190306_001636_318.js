import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name } = this.props;
		console.log(this.props);
		return (
			<div className='card'>
				<h3 className='card-title'>
					<strong>File</strong>&nbsp;|&nbsp;<em>{name}</em>
				</h3>
				<pre className={`language-${lang}`}>
					<code className={`language-${lang}`}>{content}</code>
				</pre>
			</div>
		);
	}
}

export default File;
