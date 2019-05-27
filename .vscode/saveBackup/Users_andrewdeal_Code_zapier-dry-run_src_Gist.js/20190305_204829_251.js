import React from 'react';

class Gist extends React.Component {
	render() {
		let { description, files, id, owner } = this.props;
		return (
			<div className='row'>
				<div className='col col-sm-8 col-sm-offset-2'>
					<div className='panel'>
						<div className='panel-head'>
							<p className='panel-title'>Gist ID: {id}</p>
						</div>
						<div className='panel-body' />
						<div className='panel-footer'>
							<p>Created by: {owner}</p>

							{description ? <p>Description: {description}</p> : null}
							<p>Number of files: {Object.entries(files).length}</p>
							{/* Included created at and last updated at timestamps */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gist;
