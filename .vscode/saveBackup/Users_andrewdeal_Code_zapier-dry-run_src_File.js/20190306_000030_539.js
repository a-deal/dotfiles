import React from 'react';

class File extends React.Component {
	render() {
		console.log(this.props);
		return (
			<section className='section-primary'>
				<code>{this.props.contents}</code>
			</section>
		);
	}
}

export default File;