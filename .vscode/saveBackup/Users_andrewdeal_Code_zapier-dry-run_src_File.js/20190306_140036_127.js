import React from 'react';

class File extends React.Component {
	state = {
		showModal: false
	};
	toggleModal = event => {
		event.preventDefault();
		console.log('click!');
		this.setState({ showModal: !this.state.showModal });
	};
	render() {
		const { content, lang, name, rawURL, size } = this.props;
		console.log(this.props);

		return (
			<tr>
				<td>
					<p>
						<strong>{name}</strong>
					</p>
					{/* <pre className={`language-${lang}`}>
						<code className={`language-${lang}`}>{content}</code>
					</pre> */}
				</td>
				<td className='align-center'>
					<p>{size} Bytes</p>
					{/* <p className='align-center'>{size} Bytes</p> */}
				</td>
				<td className='align-center'>
					<p>
						<strong>{lang}</strong>
					</p>
				</td>
				<td className='align-right'>
					<button onClick={this.toggleModal} className='button-primary'>
						View File
					</button>
				</td>
			</tr>
		);
	}
}

export default File;
