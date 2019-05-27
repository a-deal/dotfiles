import React from 'react';

class File extends React.Component {
	render() {
		const { content, lang, name, rawURL } = this.props;
		console.log(this.props);
		return (
									<td>
										<p>
											<strong>{name}</strong>
										</p>
					<pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Consectetur necessitatibus facilis facere eaque.
											Molestias, quaerat. Tempore accusantium esse, cum sunt
											totam quibusdam mollitia vel aliquid.
										</p>
										<p>
											<a href='#'>view details</a> |
											<a href='#'>add to wishlist</a>
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
										<button class='button-primary-outlined'>Remove</button>
									</td>
			<div className='card'>
				<p className='magnify'>
					<strong>{name}</strong>
				</p>
				<div>

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
