import React from 'react';
import moment from 'moment';
import client from './GHClient';
import FileList from './FileList';

class Gist extends React.Component {
	state = {
		files: []
	};
	componentDidMount() {
		client.getGistByID(this.props.id).then(data => {
			console.log(data.files);
			Object.entries(data.files).forEach(file => {
				this.setState((state, props) => {
					return {
						files: state.files.concat([data.files[file]])
					};
				});
			});
		});
	}
	render() {
		const { description, files, id, owner, createdAt, updatedAt } = this.props;
		console.log(this.state.files);
		return (
			<div className='row'>
				<div className='col col-sm-8 col-sm-offset-2'>
					<div className='panel'>
						<div className='panel-head'>
							<p className='panel-title'>Gist ID: {id}</p>
						</div>
						<div className='panel-body'>
							<FileList files={this.state.files} />
						</div>
						<div className='panel-footer'>
							<p>
								Created by <strong>{owner} </strong>
								{moment(createdAt).fromNow()}
							</p>
							<p> Lasted updated {moment(updatedAt).fromNow()}</p>

							{description ? <p>Description: {description}</p> : null}
							<p>Number of files: {Object.entries(files).length}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gist;
