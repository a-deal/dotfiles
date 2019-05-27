import React, { PureComponent } from 'react';

const styles = {
	title: {
		color: 'white',
		fontFamily: `'Averia Libre','Open Sans',sans-serif`
	}
};

class Header extends PureComponent {
	render() {
		return (
			<div className='row align-center' role='banner'>
				<div className='col col-sm-6 col-sm-offset-3'>
					<h1 style={styles.title}>Github Gist Viewer</h1>
				</div>
			</div>
		);
	}
}

export default Header;
