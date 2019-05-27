import React, { PureComponent } from 'react';
import FileDetails from './FileDetails';

class FileList extends PureComponent {
	render() {

	const { files, owner } = this.props
		return (
			<tbody>
				{this.props.files.map(file => {
					return (
						<FileDetails
							key={file.raw_url}
							content={file.content}
							name={file.filename}
							lang={file.language}
							rawURL={file.raw_url}
							size={file.size}
							owner={}
						/>
					);
				})}
			</tbody>
		);
	}
}

export default FileList;
