import React, {Component} from 'react';
import File from './File';
import Modal from './Modal';

const styles = {
	tableRow: {
		borderBottom: '1px solid #d8d8d8'
	}
};

class FileDetails extends .Component {
	state = {
		showModal: false
	};
	toggleModal = event => {
		event.preventDefault();
		this.setState({ showModal: !this.state.showModal });
	};
	render() {
		const { content, lang, name, rawURL, size } = this.props;
		return (
			<tr style={styles.tableRow}>
				<td>
					<p>{name}</p>
				</td>
				<td className='align-center'>
					<p>{size} Bytes</p>
				</td>
				<td className='align-center'>
					<p>{lang}</p>
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
						<File
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
