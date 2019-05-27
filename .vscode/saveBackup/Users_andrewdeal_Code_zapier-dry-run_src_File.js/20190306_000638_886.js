import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang } = this.props;
		console.log(this.props);
		return (
			<pre className={`language-${this.props.lang}`}>

				<code className={`language-${this.props.lang}`}>{this.props.content}</code>
			</pre>
			<section className='section-secondary'>
			</section>
		);
	}
}

export default File;
