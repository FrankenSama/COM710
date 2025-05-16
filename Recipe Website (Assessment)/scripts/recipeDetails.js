// Load the correct recipe based on URL ID
function loadRecipeDetails() {
  // Get ID from URL (e.g., "recipe-details.html?id=2")
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = parseInt(urlParams.get('id'));

  // Get all recipes from localStorage
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  
  // Find the matching recipe
  const recipe = recipes.find(r => r.id === recipeId);

  if (recipe) {
    const container = document.getElementById('recipe-details');
    container.innerHTML = `
      <div class="recipe-header">
        <img src="${recipe.thumbnail || 'assets/default-recipe.jpg'}" alt="${recipe.name}">
        <h1>${recipe.name}</h1>
        <p class="likes">❤️ ${recipe.likes} Likes</p>
      </div>
      
      <div class="recipe-content">
        <section class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </section>
        
        <section class="instructions">
          <h2>Instructions</h2>
          <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </section>
      </div>
      
      <section class="comments-section">
        <h2>Comments</h2>
        <div class="comments-list" id="comments-container">
          ${recipe.comments?.map(c => `
            <div class="comment">
              <strong>${c.user}</strong>: ${c.text}
              <small>${new Date(c.date).toLocaleDateString()}</small>
            </div>
          `).join('') || '<p>No comments yet</p>'}
        </div>
        
        <form id="comment-form">
          <textarea placeholder="Add your comment..." required></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </section>
    `;

    // Helper function to add comments
function addComment(recipeId, commentText) {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const recipe = recipes.find(r => r.id === recipeId);
  
  if (!recipe.comments) recipe.comments = [];
  
  recipe.comments.push({
    user: "You", // Would be dynamic in a real app
    text: commentText,
    date: new Date().toISOString()
  });
  
  localStorage.setItem('recipes', JSON.stringify(recipes));
  loadRecipeDetails(); // Refresh the display
}
  } else {
    // Handle missing recipe
    document.getElementById('recipe-details').innerHTML = `
      <h2>Recipe not found</h2>
      <a href="index.html">Back to all recipes</a>
    `;
  }
}

// Initialize when page loads
window.onload = loadRecipeDetails;