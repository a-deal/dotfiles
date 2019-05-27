import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name, rawURL } = this.props;
		console.log(this.props);
		return (
			<div className='card'>
				<p className='magnify'>
					<strong>{name}</strong>
				</p>
				<div>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
				</div>
				<ul className='card-actions'>
					<li>
						<button className='button-primary-outlined'>
							<a href={rawURL}>View Raw Version</a>
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default File;
