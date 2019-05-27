import React, { PureComponent } from 'react';
import moment from 'moment';
import client from './GHClient';
import FileList from './FileList';

const styles = {
	tableRow: {
		borderBottom: '1px solid #d8d8d8'
	}
};

class Gist extends PureComponent {
	state = {
		files: [],
		isLoading: false
	};
	componentDidMount() {
		this.setState({ isLoading: true });
		client
			.getGistByID(this.props.id)
			.then(data => {
				Object.values(data.files).forEach(file => {
					this.setState((state, props) => {
						return {
							files: state.files.concat([file])
						};
					});
				});
			})
			.then(() => this.setState({ isLoading: false }));
	}
	render() {
		const { description, files, id, owner, createdAt, updatedAt } = this.props;
		return (
			<div className='row'>
				<div className='col col-sm-10 col-sm-offset-1'>
					<section className='section-secondary'>
						<div className='align-center'>
							<p className='h4'>Gist {id}</p>
						</div>
						<table>
							<thead>
								<tr style={styles.tableRow}>
									<th>
										<strong>File</strong>
									</th>
									<th className='align-center'>
										<strong>Size</strong>
									</th>
									<th className='align-center'>
										<strong>Language</strong>
									</th>
									<th />
								</tr>
							</thead>
							<FileList files={this.state.files} />
						</table>
						<ul className='tags align-center'>
							<li className='tag tag-rounded tag-green'>
								Created by <strong>{owner} </strong>
								{moment(createdAt).fromNow()}
							</li>
							<li className='tag tag-rounded tag-green'>
								Contains
								<strong> {Object.entries(files).length} files</strong>
							</li>
							<li className='tag tag-rounded tag-green'>
								Last updated {moment(updatedAt).fromNow()}
							</li>
						</ul>
					</section>
				</div>
			</div>
		);
	}
}

export default Gist;
