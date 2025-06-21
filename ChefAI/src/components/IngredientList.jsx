import React from "react";

export default function IngredientList(props) {
  let ingredientList = props.ingredientList

  const ingredientListDisplay = ingredientList.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

    
  return ingredientList.length > 0 ? (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientListDisplay}
      </ul>
      {ingredientList.length > 2 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecepie}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  ) : null;
}
