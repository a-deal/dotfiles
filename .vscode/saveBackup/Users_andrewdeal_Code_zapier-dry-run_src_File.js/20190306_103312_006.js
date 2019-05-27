import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name, rawURL } = this.props;
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Consectetur necessitatibus facilis facere eaque. Molestias, quaerat.
						Tempore accusantium esse, cum sunt totam quibusdam mollitia vel
						aliquid.
					</p>
				</td>
				<td>
					<p class='align-center'>1</p>
				</td>
				<td>
					<p class='align-right'>
						<strong>$10.00</strong>
					</p>
				</td>
				<td class='align-right'>
					<button className='button-primary-outlined'>
						<a href={rawURL}>View Raw Version</a>
					</button>
				</td>
			</tr>
		);
	}
}

export default File;
