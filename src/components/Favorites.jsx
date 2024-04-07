import React from 'react';

const Favorites = ({ recipe, handleFavorite }) => {
    const handleClick = () => {
        handleFavorite(recipe);
    };

    return (
        <button
            onClick={handleClick}
            className="bg-green-500 text-white px-3 py-1 rounded-full"
        >
            Favorite
        </button>
    );
};

export default Favorites;
