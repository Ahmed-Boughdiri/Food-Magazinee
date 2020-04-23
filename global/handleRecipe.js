
export let recipeSuccess = false;

export let recipe = {}

export const handleRecipe = (food) =>{
    recipe = {
        name: food.label,
        label: food.source,
        image: food.image,
        calories: Math.floor(food.calories),
        ingredients: food.ingredients,
        totalTime: food.totalTime,
        totalNutrients:   Object.keys(food.totalNutrients).map((key) =>{
            return food.totalNutrients[key];
        })
    }
}