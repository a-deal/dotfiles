import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name, rawURL, size } = this.props;
		console.log(this.props);

		return (
			<tr className='align-center'>
				<td>
					<p className='align-center'>
						<strong>{name}</strong>
					</p>
					{/* <pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre> */}
				</td>
				<td>
					<p>{size} Bytes</p>
					{/* <p className='align-center'>{size} Bytes</p> */}
				</td>
				<td>
					<p>
						<strong>{lang}</strong>
					</p>
				</td>
				<td className='align-right'>
					<button className='button-primary-outlined'>
						<a href={rawURL}>View Raw Version</a>
					</button>
				</td>
			</tr>
		);
	}
}

export default File;
