import React, { Component } from 'react';
import File from './File';
import Modal from '../Modal';
import { Consumer } from '../Favorite/Context';

const styles = {
	tableRow: {
		borderBottom: '1px solid #d8d8d8'
	}
};

class FileDetails extends Component {
	state = {
		showModal: false
	};
	toggleModal = event => {
		event.preventDefault();
		this.setState({ showModal: !this.state.showModal });
	};
	render() {
		const {
			onAddOrRemoveFavorite,
			content,
			lang,
			name,
			owner,
			rawURL,
			size
		} = this.props;
		return (
			<tr style={styles.tableRow}>
				<td>
					<p>{name}</p>
				</td>
				<td className='align-center'>
					<p>{size ? `${size} Bytes` : 'N/A'}</p>
				</td>
				<td className='align-center'>
					<p>{lang ? lang : 'N/A'}</p>
				</td>
				<td className='align-right'>
					<button
						aria-label='View file'
						onClick={this.toggleModal}
						className='button-primary-outlined'
					>
						View File
					</button>
				</td>
				{this.state.showModal ? (
					<Consumer>
						{context => (
							<Modal>
								<File
									onAddOrRemoveFavorite={context.handleAddFavorite}
									onToggleModal={this.toggleModal}
									owner={owner}
									rawURL={rawURL}
									name={name}
									content={content}
									lang={lang}
								/>
							</Modal>
						)}
					</Consumer>
				) : null}
			</tr>
		);
	}
}

export default FileDetails;
