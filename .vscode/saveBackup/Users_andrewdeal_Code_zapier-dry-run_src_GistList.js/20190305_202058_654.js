import React from 'react';
import Gist from './Gist';

export default function(props) {
	let gists = props.gists.map(gist => (
		<Gist
			key={gist.id}
			id={gist.id}
			owner={gist.owner.login}
			description={gist.description}
			files={gist.files}
		/>
	));
	return <div className='container' />;
}
