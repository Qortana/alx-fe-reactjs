import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!instructions.trim()) newErrors.instructions = 'Instructions are required';
    
    // Optional: check ingredients list has at least 2 items
    if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients, separated by commas';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // For now, just log the new recipe
    console.log({
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions: instructions.split('.').map(i => i.trim()).filter(Boolean)
    });

    // Clear form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
    alert('Recipe submitted successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="instructions">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
