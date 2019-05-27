import React from 'react';

const FavoriteContext = React.createContext({
	handleAddFavorite() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
