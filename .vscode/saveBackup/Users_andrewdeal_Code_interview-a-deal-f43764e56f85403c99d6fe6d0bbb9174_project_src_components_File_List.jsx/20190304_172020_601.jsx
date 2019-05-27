import React, { PureComponent } from 'react';
import FileDetails from './Details';

class FileList extends PureComponent {
	render() {
		const { files, owner } = this.props;
		return (
			<tbody>
				{files.map(file => {
					return (
						<FileDetails
							key={file.raw_url}
							content={file.content}
							name={file.filename}
							lang={file.language}
							rawURL={file.raw_url}
							size={file.size}
							owner={owner}
						/>
					);
				})}
			</tbody>
		);
	}
}

export default FileList;