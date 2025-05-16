// Load recipes from localStorage
function getRecipes() {
  return JSON.parse(localStorage.getItem('recipes')) || [];
}

// Render recipes to the page
function renderRecipes(recipesToRender = getRecipes()) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = recipesToRender.map(recipe => `
    <div class="recipe-card">
      ${recipe.thumbnail ? `<img src="${recipe.thumbnail}" alt="${recipe.name}">` : ''}
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <div class="recipe-actions">
        <button onclick="handleLike(${recipe.id})">❤️ ${recipe.likes}</button>
        <a href="recipe-details.html?id=${recipe.id}">View Recipe</a>
      </div>
    </div>
  `).join('');
}

// Handle likes (no backend needed)
function handleLike(recipeId) {
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id === recipeId);
  recipe.likes++;
  localStorage.setItem('recipes', JSON.stringify(recipes));
  renderRecipes(); // Refresh the UI
}

// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filteredRecipes = getRecipes().filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm) || 
    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
  );
  renderRecipes(filteredRecipes);
});

// Initialize the page
renderRecipes();