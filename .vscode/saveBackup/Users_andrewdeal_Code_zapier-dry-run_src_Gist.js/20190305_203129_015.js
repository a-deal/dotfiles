import React from 'react';

class Gist extends React.Component {
	render() {
		return (
			<div class='panel'>
				<div class='panel-head'>
					<p class='panel-title'>Gist ID: {this.props.id}</p>
				</div>
				<div class='panel-body'>
					<p>Created by: {this.props.owner}</p>
				</div>
				<div class='panel-footer'>
					<button class='button-primary'>Action 1</button>
					<button class='button-primary-text'>Action 2</button>
				</div>
				<h3>{this.props.id}</h3>
				<h4>Created by: {this.props.owner}</h4>
				<p>{this.props.description}</p>
				<p>Number of files: {this.props.files.length}</p>
			</div>
		);
	}
}

export default Gist;
