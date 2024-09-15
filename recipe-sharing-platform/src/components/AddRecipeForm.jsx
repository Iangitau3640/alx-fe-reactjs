import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State management for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    let tempErrors = {};
    if (!title) tempErrors.title = 'Recipe title is required';
    if (!ingredients) tempErrors.ingredients = 'Ingredients are required';
    if (!steps) tempErrors.steps = 'Preparation steps are required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ title, ingredients, steps });
      // Handle form submission here
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Recipe Title</label>
          <input
            name="title"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Use target.value here
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)} // Use target.value here
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Preparation Steps</label>
          <textarea
            name="steps"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            value={steps}
            onChange={(e) => setSteps(e.target.value)} // Use target.value here
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 shadow-md"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;