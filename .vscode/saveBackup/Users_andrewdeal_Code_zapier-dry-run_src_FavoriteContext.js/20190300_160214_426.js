import React from 'react';

const FavoriteContext = React.createContext({
	handleAddFavorite() {}
});

export const Provider = FavoriteContext.Provider;
export const Consumer = FavoriteContext.Consumer;
