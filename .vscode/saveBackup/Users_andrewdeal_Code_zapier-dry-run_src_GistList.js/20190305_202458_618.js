import React from 'react';
import Gist from './Gist';

const GistList = props => {
	return (
		<div className='container'>
			{props.gists.map(gist => (
				<Gist
					key={gist.id}
					id={gist.id}
					owner={gist.owner.login}
					description={gist.description}
					files={gist.files}
				/>
			))}
		</div>
	);
};

export default GistList;
