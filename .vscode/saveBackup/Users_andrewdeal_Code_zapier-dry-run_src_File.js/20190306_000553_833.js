import React from 'react';

class File extends React.Component {
	render() {
		console.log(this.props);
		return (
			<pre className={`language-${this.props.lang}`}
			<section className='section-secondary'>
				<code>{this.props.content}</code>
			</section>
		);
	}
}

export default File;
