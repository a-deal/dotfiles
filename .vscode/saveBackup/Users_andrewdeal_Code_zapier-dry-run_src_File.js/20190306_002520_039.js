import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name, rawURL } = this.props;
		console.log(this.props);
		return (
			// <section className='section-secondary'>
			<div className='card'>
				<p className='magnify'>
					<strong>{name}</strong>
				</p>
				<a href={rawURL} className={float - right}>
					Raw Version
				</a>
				<pre className={`language-${lang}`}>
					<code className={`language-${lang}`}>{content}</code>
				</pre>
			</div>
			// </section>
		);
	}
}

export default File;
