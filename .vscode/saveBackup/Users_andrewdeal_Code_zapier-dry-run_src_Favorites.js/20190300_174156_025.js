import React, { PureComponent } from 'react';
import File from './File';

class Favorites extends PureComponent {
	render() {
		const { favorites } = this.props;
		return (
			<div class='sidebar sidebar-left'>
				<h3 class='sidebar-category'>Components</h3>
				<ul class='sidebar-links'>
					{favorites.map(favorite => {
						return (
							<li>
								<a href='#'>
									<File
										onToggleModal={this.toggleModal}
										owner={favorite.owner}
										rawURL={favorite.rawurl}
										name={favorite.name}
										content={favorite.content}
										lang={favortie.lang}
										isFavorite={true}
									/>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Favorites;
