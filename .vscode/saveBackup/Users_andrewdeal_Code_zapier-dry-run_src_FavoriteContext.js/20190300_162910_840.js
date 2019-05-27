import React from 'react';

const FavoriteContext = React.createContext({
	handleAddFavorite() {
		console.log('click');
	}
});

export const Provider = FavoriteContext.Provider;
export const Consumer = FavoriteContext.Consumer;
