// Sample recipe data
const recipes = [
  {
    id: 1,
    name: "Pasta Carbonara",
    ingredients: ["Pasta", "Eggs", "Bacon", "Parmesan"],
    instructions: ["Boil pasta", "Fry bacon", "Mix eggs and cheese", "Combine all"],
    likes: 42,
    thumbnail: "assets/pasta.jpg"  // Optional image
  },
  {
    id: 2,
    name: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Lemon", "Salt"],
    instructions: ["Toast bread", "Mash avocado", "Add lemon and salt", "Spread on toast"],
    likes: 35,
    thumbnail: "assets/toast.jpg"  // Optional image
  },
 {
    id: 3,
    name: "Chocolate Chip Cookies",
    ingredients: ["Flour", "Butter", "Brown sugar", "Chocolate chips", "Vanilla extract"],
    instructions: ["Cream butter and sugars", "Mix in dry ingredients", "Fold in chocolate chips", "Bake at 350°F for 10-12 mins"],
    likes: 28,
    thumbnail: "assets/cookies.jpg"
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    ingredients: ["Broccoli", "Bell peppers", "Carrots", "Soy sauce", "Garlic"],
    instructions: ["Stir-fry veggies on high heat", "Add minced garlic", "Drizzle with soy sauce", "Serve over rice"],
    likes: 19,
    thumbnail: "assets/stirfry.jpg"
  },
  {
    id: 5,
    name: "Greek Salad",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Olives"],
    instructions: ["Dice veggies and combine", "Add cubed feta and olives", "Drizzle with olive oil", "Sprinkle oregano"],
    likes: 23,
    thumbnail: "assets/salad.jpg"
  },
  {
    id: 6,
    name: "Beef Tacos",
    ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheddar cheese"],
    instructions: ["Brown the beef with taco seasoning", "Chop veggies", "Fill shells with beef and toppings", "Add cheese"],
    likes: 31,
    thumbnail: "assets/tacos.jpg"
  },
  {
    id: 7,
    name: "Blueberry Pancakes",
    ingredients: ["Pancake mix", "Milk", "Egg", "Blueberries", "Maple syrup"],
    instructions: ["Mix batter with milk and egg", "Fold in blueberries", "Cook on griddle", "Serve with syrup"],
    likes: 27,
    thumbnail: "assets/pancakes.jpg"
  },
 {
    id: 8,
    name: "Margherita Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil leaves", "Olive oil"],
    instructions: ["Preheat oven to 475°F", "Stretch dough and add sauce", "Top with mozzarella", "Bake for 10-12 mins", "Add fresh basil"],
    likes: 38,
    thumbnail: "assets/pizza.jpg"
  },
  {
    id: 9,
    name: "Chicken Curry",
    ingredients: ["Chicken thighs", "Coconut milk", "Curry paste", "Bell peppers", "Jasmine rice"],
    instructions: ["Sauté chicken until browned", "Add curry paste and veggies", "Pour in coconut milk", "Simmer for 20 mins", "Serve over rice"],
    likes: 29,
    thumbnail: "assets/curry.jpg"
  },
  {
    id: 10,
    name: "Berry Smoothie",
    ingredients: ["Mixed berries", "Greek yogurt", "Almond milk", "Honey", "Chia seeds"],
    instructions: ["Blend all ingredients", "Add ice if desired", "Pour into glass", "Top with chia seeds"],
    likes: 17,
    thumbnail: "assets/smoothie.jpg"
  },
  {
    id: 11,
    name: "Garlic Butter Shrimp",
    ingredients: ["Shrimp", "Garlic", "Butter", "Lemon", "Parsley"],
    instructions: ["Melt butter in pan", "Sauté garlic until fragrant", "Add shrimp and cook 2 mins/side", "Squeeze lemon juice", "Garnish with parsley"],
    likes: 33,
    thumbnail: "assets/shrimp.jpg"
  },
  {
    id: 12,
    name: "Chocolate Mousse",
    ingredients: ["Dark chocolate", "Heavy cream", "Egg whites", "Sugar", "Vanilla extract"],
    instructions: ["Melt chocolate", "Whip cream to stiff peaks", "Fold in egg whites", "Chill for 4 hours", "Serve with berries"],
    likes: 25,
    thumbnail: "assets/mousse.jpg"
  }
];

// Save to localStorage (to simulate persistence)
localStorage.setItem('recipes', JSON.stringify(recipes));