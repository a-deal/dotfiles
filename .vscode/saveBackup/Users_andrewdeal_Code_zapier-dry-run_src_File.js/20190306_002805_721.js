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
				<button className='button-primary-outlined float-right'>
					<a href={rawURL}>Raw Version</a>
				</button>
				<div className='clear-fix'>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
				</div>
			</div>
			// </section>
		);
	}
}

export default File;
