import React from 'react';
import FileContent from './FileContent';
import Modal from './Modal';

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
			<div>
				<tr>
					<td>
						<p>
							<strong>{name}</strong>
						</p>
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
				{this.state.showModal ? (
					<Modal>
						<FileContent content={content} lang={lang} />
					</Modal>
				) : null}
			</div>
		);
	}
}

export default File;