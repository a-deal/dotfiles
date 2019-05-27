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
				<button className='button-primary-outlined'>
					<a href={rawURL}>Raw Version</a>
				</button>

				<pre className={`language-${lang}`}>
					<code className={`language-${lang}`}>{content}</code>
				</pre>
			</div>
			// </section>
		);
	}
}

export default File;