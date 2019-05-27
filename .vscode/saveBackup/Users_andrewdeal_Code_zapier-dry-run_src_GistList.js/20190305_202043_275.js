import React from 'react';

export default function(props) {
	let gists = props.gists.map(gist => (
		<Gistlist
			key={gist.id}
			id={gist.id}
			owner={gist.owner.login}
			description={gist.description}
			files={gist.files}
		/>
	));
	return <div className='container' />;
}