import React from 'react';

const styles = {
	title: {
		color: 'white',
		fontFamily: `'Averia Libre','Open Sans',sans-serif`
	}
};
const Header = () => (
	<div className='row align-center'>
		<div className='col col-sm-6 col-sm-offset-3'>
			<h1 style={styles.title}>Github Gist Viewer</h1>
			{/* <p>
				<em>Your trusted guide to viewing a user's gists</em>
			</p>
			<hr /> */}
		</div>
	</div>
);

export default Header;
