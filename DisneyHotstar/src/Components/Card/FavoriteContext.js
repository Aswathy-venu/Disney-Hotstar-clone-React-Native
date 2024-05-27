import React, { createContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

const WatchListProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (movie) => {
        setFavorites((prevFavorites) => 
            prevFavorites.some((fav) => fav.id === movie.id)
                ? prevFavorites.filter((fav) => fav.id !== movie.id)
                : [...prevFavorites, movie]
        );
    };

    const numberOfFavoriteMovies = favorites.length;

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, numberOfFavoriteMovies }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export { FavoriteContext, WatchListProvider };
