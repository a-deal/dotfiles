import React from 'react';

class Gist extends React.Component {
	render() {
		let { description, files, id, owner } = this.props;
		return (
			<div className='row'>
				<div className='col col-sm-6 col-sm-offset-3'>
					<div className='panel'>
						<div className='panel-head'>
							<p className='panel-title'>Gist ID: {id}</p>
						</div>
						<div className='panel-body'>
							<p>Created by: {owner}</p>
							{description ? <p>Description: {description}</p> : null}
						</div>
						<div className='panel-footer' />
						{/* Included created at and last updated at timestamps */}
						<p>Number of files: {Object.entries(files).length}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gist;
