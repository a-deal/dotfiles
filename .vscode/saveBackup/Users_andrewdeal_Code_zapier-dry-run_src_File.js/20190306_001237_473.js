import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name } = this.props;
		console.log(this.props);
		return (
			<div className='container'>
				<p className='float-right'>
					<em>{name}</em>
				</p>
				<pre className={`language-${lang}`}>
					<code className={`language-${lang}`}>{content}</code>
				</pre>
			</div>
		);
	}
}

export default File;
