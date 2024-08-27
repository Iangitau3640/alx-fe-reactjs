import { useRecipeStore } from './recipeStore';
import React from 'react';
import { Link } from 'react-router-dom';
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (

    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>


    




  );
};

export default RecipeList;