import React, { PureComponent } from 'react';

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
			// isFavorite,
			onToggleModal,
			// onAddOrRemoveFavorite,
			// owner,
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
						<button
							aria-label={`View file's raw source code`}
							className='button-primary-outlined float-right'
						>
							<a
								target='_blank'
								rel='noopener noreferrer'
								style={styles.anchor}
								href={rawURL}
							>
								View Raw Source
							</a>
						</button>
						{/* <button
							aria-label={`Add file to list of favorites`}
							onClick={onAddOrRemoveFavorite}
							className='button-primary-text float-right'
							data-owner={owner}
							data-filename={name}
							data-content={content}
							data-rawurl={rawURL}
							data-lang={lang}
						>
							{!isFavorite ? 'Add to Favorites' : 'Remove from Favorites'}
						</button> */}
						<button
							aria-label={`Return to home page`}
							onClick={onToggleModal}
							className='button-primary'
						>
							Return
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default File;
