import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name } = this.props;
		console.log(this.props);
		return (
			<pre className={`language-${lang}`}>
				<code className={`language-${lang}`}>{content}</code>
				<p>
					<em>name</em>
				</p>
			</pre>
		);
	}
}

export default File;
