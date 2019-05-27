import React, { PureComponent } from 'react';

class Favorites extends PureComponent {
	render() {
		const { favorites } = this.props;
		return (
			<div class='sidebar sidebar-left'>
				<h3 class='sidebar-category'>Components</h3>
				<ul class='sidebar-links'>
					<li>
						<a href='#'>Alerts</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Favorites;
