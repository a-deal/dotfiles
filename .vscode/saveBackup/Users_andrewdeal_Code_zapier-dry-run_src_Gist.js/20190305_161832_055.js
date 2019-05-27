import React from 'react';

class Gist extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.id}</h3>
				<p>{this.props.description}</p>
				<p>{this.props.files}</p>
			</div>
		);
	}
}

export default Gist;
