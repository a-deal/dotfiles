import React, { PureComponent } from 'react';
import { Consumer } from './FavoriteContext';

const styles = {
	container: {
		width: '960px',
		maxWidth: '960px'
	},
	body: {
		maxHeight: '70vh',
		overflow: 'scroll'
	},
	anchor: {
		padding: 0
	}
};

class File extends PureComponent {
	render() {
		const {
			name,
			lang,
			content,
			isFavorite,
			onToggleModal,
			onAddOrRemoveFavorite,
			owner,
			rawURL
		} = this.props;
		return (
			<div className='modal-mask'>
				<div style={styles.container} className='modal'>
					<div className='modal-head'>
						<p className='modal-title'>{name}</p>
					</div>
					<div className='modal-body' style={styles.body}>
						<pre className={`language-${lang}`}>
							<code className={`language-${lang}`}>{content}</code>
						</pre>
					</div>
					<div className='modal-footer'>
						<button className='button-primary-outlined float-right'>
							<a style={styles.anchor} href={rawURL}>
								View Raw Source
							</a>
						</button>
						<button
							onClick={onAddOrRemoveFavorite}
							className='button-primary-text float-right'
							data-owner={owner}
							data-filename={name}
							data-content={content}
							data-rawurl={rawURL}
							data-lang={lang}
						>
							{!isFavorite ? 'Add to Favorites' : 'Remove from Favorites'}
						</button>
						<button onClick={onToggleModal} className='button-primary'>
							Return
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default File;
