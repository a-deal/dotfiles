import React from 'react';

class Gist extends React.Component {
	render() {
		let { description, files, id, owner } = this.props;
		return (
			<div class='panel'>
				<div class='panel-head'>
					<p class='panel-title'>Gist ID: {this.props.id}</p>
				</div>
				<div class='panel-body'>
					<p>
						Created by: {this.props.owner}
					</p>
						{description ? (<p>Description: {description} </p>`` : null}
				</div>
				<div class='panel-footer' />
				{/* Included created at and last updated at timestamps */}
				<p>Number of files: {Object.entries(files).length}</p>
			</div>
		);
	}
}

export default Gist;
