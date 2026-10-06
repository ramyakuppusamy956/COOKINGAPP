
// Get the search elements
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

// Get all recipe cards
const recipeCards = document.querySelectorAll(".recipe-card");

// Recipe information
const recipes = {
    "Cheesy Pizza": {
        time: "30 minutes",
        rating: "4.8",
        ingredients: [
            "Pizza base",
            "Tomato sauce",
            "Mozzarella cheese",
            "Onion",
            "Capsicum",
            "Oregano"
        ],
        instructions:
            "Spread tomato sauce on the pizza base. Add vegetables and cheese. Bake until the cheese melts."
    },

    "Creamy Pasta": {
        time: "25 minutes",
        rating: "4.7",
        ingredients: [
            "Pasta",
            "Cream",
            "Garlic",
            "Cheese",
            "Pepper",
            "Salt"
        ],
        instructions:
            "Boil the pasta. Prepare a creamy sauce with garlic and cream. Mix the pasta with the sauce and add cheese."
    },

    "Classic Burger": {
        time: "20 minutes",
        rating: "4.9",
        ingredients: [
            "Burger bun",
            "Vegetable patty",
            "Cheese",
            "Tomato",
            "Onion",
            "Lettuce"
        ],
        instructions:
            "Cook the patty. Toast the bun. Add lettuce, tomato, onion, cheese and the patty. Serve hot."
    }
};


// -----------------------------
// SEARCH RECIPES
// -----------------------------

function searchRecipes() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    recipeCards.forEach(function(card) {

        const recipeName =
            card.querySelector("h3").textContent.toLowerCase();

        if (recipeName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


// Search button click
searchButton.addEventListener("click", searchRecipes);


// Search when pressing Enter
searchInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        searchRecipes();

    }

});


// -----------------------------
// VIEW RECIPE
// -----------------------------

const viewButtons =
    document.querySelectorAll(".view-btn");


viewButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find recipe card
        const card = button.closest(".recipe-card");

        // Get recipe name
        const recipeName =
            card.querySelector("h3").textContent;

        // Get recipe data
        const recipe = recipes[recipeName];

        if (recipe) {

            alert(
                "🍳 " + recipeName +
                "\n\n" +

                "⏱ Cooking Time: " +
                recipe.time +

                "\n⭐ Rating: " +
                recipe.rating +

                "\n\n🥕 Ingredients:\n" +

                recipe.ingredients.join("\n") +

                "\n\n👨‍🍳 Instructions:\n" +

                recipe.instructions
            );

        }

    });

});


// -----------------------------
// CATEGORY CLICK
// -----------------------------

const categories =
    document.querySelectorAll(".category");


categories.forEach(function(category) {

    category.addEventListener("click", function() {

        const categoryName =
            category.querySelector("p").textContent;

        searchInput.value = categoryName;

        alert(
            "You selected: " +
            categoryName
        );

    });

});
