import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name, rawURL, size } = this.props;
		console.log(this.props);

		return (
			<tr>
				<td>
					<p>
						<strong>{name}</strong>
					</p>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
				</td>
				<td>
					<p class='align-center'>{size} Bytes</p>
				</td>
				<td>
					<p className='align-right'>
						<strong>{lang}</strong>
					</p>
				</td>
				<td className='align-right'>
					<button classNameName='button-primary-outlined'>
						<a href={rawURL}>View Raw Version</a>
					</button>
				</td>
			</tr>
		);
	}
}

export default File;
