// Recipes.js

import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Loading from './Loading';
import Searchbar from './SearchBar';
import RecipeCard from './RecipeCard';
import { fetchRecipes } from '../utils';
import Button from './Button';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('Vegan');
    const [limit, setLimit] = useState(30);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('');
    const [favorites, setFavorites] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const fetchRecipe = async () => {
        try {
            setLoading(true);
            const data = await fetchRecipes({ query, limit, category });
            setRecipes(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchedRecipe = async (e) => {
        e.preventDefault();
        fetchRecipe();
    };

    const showMore = () => {
        setLimit((prev) => prev + 10);
        fetchRecipe();
    };

    const handleFavorite = (recipe) => {
        const existingIndex = favorites.findIndex(fav => fav.recipe.uri === recipe.recipe.uri);
        if (existingIndex !== -1) {
            const updatedFavorites = [...favorites];
            updatedFavorites.splice(existingIndex, 1);
            setFavorites(updatedFavorites);
        } else {
            setFavorites(prev => [...prev, recipe]);
        }
    };
    

    useEffect(() => {
        fetchRecipe();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                {/* Searchbar Component */}
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <Searchbar
                        placeholder='eg. Cake, Vegan, Chicken'
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2
                                className='text-gray-600'
                                onClick={handleSearchedRecipe}
                            />
                        }
                    />
                </form>
                {/* Category Filter */}
                <select
                    className='ml-4 p-2 bg-black border border-gray-800 text-gray-300 rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 outline-none placeholder-text-sm shadow-xl'
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value=''>All Categories</option>
                    <option value='American'>American</option>
                    <option value='Asian'>Asian</option>
                    <option value='Italian'>Italian</option>
                    
                </select>
            </div>

            {recipes?.length > 0 ? (
                <>
                    <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                        {/* Display Recipe Cards */}
                        {recipes?.map((item, index) => (
                            <RecipeCard recipe={item} key={index} handleFavorite={handleFavorite} />
                        ))}
                    </div>

                    {/* Show More Button */}
                    <div className='flex w-full items-center justify-center py-10'>
                        <Button
                            title='Show More'
                            containerStyle='bg-green-800 text-white px-3 py-1 rounded-full text-sm'
                            handleClick={showMore}
                        />
                    </div>
                </>
            ) : (
                <div className='text-white w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            )}

            {/* Favorites Section */}
            <div className='w-full px-0 lg:px-10 py-10'>
                <h2 className='text-white text-2xl font-bold mb-4'>Favorite Recipes</h2>
                <div className='flex flex-wrap gap-10'>
                    {/* Display Favorite Recipe Cards */}
                    {favorites.map((item, index) => (
                        <RecipeCard recipe={item} key={index} handleFavorite={handleFavorite} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recipes;
