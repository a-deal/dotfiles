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
						<div className='align-center'>
							<ul className='tags'>
								<li className='tag'>
									Created by <strong>{owner} </strong>
									{moment(createdAt).fromNow()}
								</li>
								<li className='tag'>
									Gist contains
									<strong> {Object.entries(files).length} files</strong>
								</li>
								<li className='tag'>
									Last updated {moment(updatedAt).fromNow()}
								</li>
							</ul>
						</div>
						<p className='h4'>Gist {id}</p>

						<table>
							<thead>
								<tr>
									<th>Filename</th>
									<th className='align-center'>Size</th>
									<th className='align-center'>Language</th>
									<th />
								</tr>
							</thead>
							<FileList files={this.state.files} />
						</table>
					</section>
				</div>
			</div>
		);
	}
}

export default Gist;
