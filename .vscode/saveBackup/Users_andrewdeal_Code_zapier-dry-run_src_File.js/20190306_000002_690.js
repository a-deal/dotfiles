import React from 'react';

class File extends React.Component {
	console.log(this.props.contents)
	render() {
		return (
			<section className='section-primary'>
				<code>{this.props.contents}</code>
			</section>
		);
	}
}

export default File;
