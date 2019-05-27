import React from 'react';

class Gist extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.id}</h3>
				<h4>Created by: {this.props.owner}</h4>
				<p>{this.props.description}</p>
				<p>Number of files: {this.props.files.length}</p>
			</div>
		);
	}
}

export default Gist;
