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
					<p>Created by: {this.props.owner}</p>
					{description ? <p>description</p> : null}
				</div>
				<div class='panel-footer' />
				<p>{this.props.description}</p>
				<p>Number of files: {this.props.files.length}</p>
			</div>
		);
	}
}

export default Gist;