import React from "react";
import AiRecipe from "./AiRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromChefClaude } from "../ai";

export default function Main() {
  const [ingredientList, setIngredientList] = React.useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient != "")
      setIngredientList((prev) => [...prev, newIngredient]);
  }

  const [isShown, showRecepie] = React.useState(false);

  const [recipe, aiRecipe] = React.useState("");

  async function getRecepie() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredientList);
    aiRecipe(recipeMarkdown);
    showRecepie(prev=>!prev)
  }

  function resetList() {
    setIngredientList(prev => [])
    showRecepie(prev => !prev)
    aiRecipe("")
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          id="ingredientInput"
          aria-label="Add ingredients"
          type="text"
          placeholder="e.g banana"
          name="ingredient"
        ></input>
        <button>Add ingredient</button>
        <button onClick={resetList}>Reset list</button>
      </form>
      <IngredientList
        ingredientList={ingredientList}
        getRecepie={getRecepie}
      />
      {recipe && <AiRecipe isShown={isShown} text={recipe} />}
    </main>
  );
}
