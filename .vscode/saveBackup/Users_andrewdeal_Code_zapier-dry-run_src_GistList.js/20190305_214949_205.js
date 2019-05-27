import React from 'react';
import Gist from './Gist';
import { Alert, LoadingMsg, INFO } from './Alert';

const GistList = props => {
	return (
		<div className='row'>
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
