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
				<div className='col col-sm-8 col-sm-offset-2'>
					<section>
						<h1 class='h2'>Gist {id}</h1>
						<p className='magnify'>
							Gist created by <strong>{owner}</strong>
							{moment(createdAt).fromNow()}. Gist contains
							{Object.entries(files).length} files and was updated{' '}
							{moment(updatedAt).fromNow()}.
						</p>
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
								<tr>
									<td>
										<p class='h6'>
											<strong>Grand Total</strong>
										</p>
									</td>
									<td>
										<p class='align-center'>4</p>
									</td>
									<td>
										<p class='align-right'>
											<strong>$76.00</strong>
										</p>
									</td>
									<td class='align-right'>
										<button class='button-primary'>Checkout</button>
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</div>
			</div>
		);
	}
}

export default Gist;
