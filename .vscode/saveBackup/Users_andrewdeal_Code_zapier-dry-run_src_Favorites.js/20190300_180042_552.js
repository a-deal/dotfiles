import React, { PureComponent } from 'react';
import File from './File';

class Favorites extends PureComponent {
	state = {
		showModal: false
	};
	toggleModal = () => {};
	render() {
		const { files } = this.props;
		return (
			<div className='sidebar sidebar-left'>
				<h3 className='sidebar-category'>Components</h3>
				<ul className='sidebar-links'>
					{files.map(favorite => {
						return (
							<li key={favorite.rawurl}>
								<button
									onClick={this.toggleModal}
									className='button-primary-text'
								/>
								{this.state.showModal ? (
									<File
										onToggleModal={this.toggleModal}
										owner={favorite.owner}
										rawURL={favorite.rawurl}
										name={favorite.name}
										content={favorite.content}
										lang={favorite.lang}
										isFavorite={true}
									/>
								) : null}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Favorites;
