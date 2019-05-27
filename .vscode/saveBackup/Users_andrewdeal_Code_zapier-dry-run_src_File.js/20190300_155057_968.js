import React, { PureComponent } from 'react';

const styles = {
	container: {
		width: '960px',
		maxWidth: '960px'
	},
	body: {
		maxHeight: '70vh',
		overflow: 'scroll'
	}
};

class File extends PureComponent {
	render() {
		const { name, lang, content, onToggleModal, rawURL } = this.props;
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
							<a href={rawURL}>View Raw Source</a>
						</button>
						<button className='button-primary-text'>Add to Favorites</button>
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
