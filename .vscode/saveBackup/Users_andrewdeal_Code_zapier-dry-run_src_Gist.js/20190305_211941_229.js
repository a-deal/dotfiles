import React from 'react';
import moment from 'moment';

class Gist extends React.Component {
	componentDidMount() {}
	render() {
		let { description, files, id, owner, createdAt, updatedAt } = this.props;
		return (
			<div className='row'>
				<div className='col col-sm-8 col-sm-offset-2'>
					<div className='panel'>
						<div className='panel-head'>
							<p className='panel-title'>Gist ID: {id}</p>
						</div>
						<div className='panel-body' />
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
