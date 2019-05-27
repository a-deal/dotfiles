import React, { PureComponent } from 'react';
import FileDetails from './Details';

class FileList extends PureComponent {
  render() {
    const { files } = this.props;
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
            />
          );
        })}
      </tbody>
    );
  }
}

export default FileList;
