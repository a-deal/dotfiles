import React, { PureComponent } from 'react';
import FileDetails from './FileDetails';

class FileList extends PureComponent {
	render() {
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
						/>
					);
				})}
			</tbody>
		);
	}
}

export default FileList;
