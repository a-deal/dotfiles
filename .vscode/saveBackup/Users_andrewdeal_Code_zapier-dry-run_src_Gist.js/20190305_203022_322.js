import React from 'react';

class Gist extends React.Component {
	render() {
		return (
			<div class='panel'>
				<div class='panel-head'>
					<p class='panel-title'>Panel Example</p>
				</div>
				<div class='panel-body'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
						ipsam omnis repellat, dolor incidunt, illo recusandae? Ducimus
						magnam, illo modi eum amet ratione numquam debitis voluptatem!
						Possimus, aliquid, doloribus. Commodi assumenda facilis nemo
						delectus eos, doloremque quasi, harum quidem molestias ex quod
						facere alias temporibus veritatis qui. Eligendi impedit eum
						assumenda iure dolorum adipisci doloribus.
					</p>
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
