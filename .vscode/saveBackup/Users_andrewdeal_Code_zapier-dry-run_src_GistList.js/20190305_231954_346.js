import React from 'react';
import Gist from './Gist';

const GistList = props => {
	console.log(props.gist);
	return (
		<div className='container'>
			{props.gists.map(gist => (
				<Gist
					key={gist.id}
					id={gist.id}
					owner={gist.owner.login}
					description={gist.description}
					files={gist.files}
					createdAt={gist.created_at}
					updatedAt={gist.updated_at}
				/>
			))}
		</div>
	);
};

export default GistList;