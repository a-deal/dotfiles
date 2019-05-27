import React from 'react';
import FileContent from './File';
import Modal from './Modal';

class FileDetails extends React.Component {
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
				</td>
				<td className='align-center'>
					<p>{size} Bytes</p>
				</td>
				<td className='align-center'>
					<p>
						<strong>{lang}</strong>
					</p>
				</td>
				<td className='align-right'>
					<button
						onClick={this.toggleModal}
						className='button-primary-outlined'
					>
						View File
					</button>
				</td>
				{this.state.showModal ? (
					<Modal>
						<FileContent
							onToggleModal={this.toggleModal}
							rawURL={rawURL}
							name={name}
							content={content}
							lang={lang}
						/>
					</Modal>
				) : null}
			</tr>
		);
	}
}

export default FileDetails;
