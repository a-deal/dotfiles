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
			Object.values(data.files).forEach(file => {
				this.setState((state, props) => {
					return {
						files: state.files.concat([file])
					};
				});
			});
		});
	}
	render() {
		const { description, files, id, owner, createdAt, updatedAt } = this.props;
		return (
			<div className='row'>
				<div className='col col-sm-10 col-sm-offset-1'>
					<section>
						<h1 class='h2'>Gist {id}</h1>
						<p>
							Created by <strong>{owner} </strong>
							{moment(createdAt).fromNow()}
						</p>
						<p>
							Gist contains
							<strong> {Object.entries(files).length} files</strong>
						</p>
						<p>Last updated {moment(updatedAt).fromNow()}</p>
						<table>
							<thead>
								<tr>
									<th>Filename</th>
									<th>Size</th>
									<th class='align-right'>Language</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<FileList files={this.state.files} />
							</tbody>
						</table>
					</section>
				</div>
			</div>
		);
	}
}

export default Gist;
