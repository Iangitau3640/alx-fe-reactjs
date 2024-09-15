import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  <div>
  <h1>Home Page</h1>
  <p>Welcome to the Recipe Sharing Platform</p>
</div>
  useEffect(() => {

    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.title}</h2>
              <p className="text-gray-700 mt-2">{recipe.summary}</p>

              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;