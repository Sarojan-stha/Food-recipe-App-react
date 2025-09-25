import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import "./Details.css";
export default function Details() {
  const {
    recipeDetails,
    setRecipeDetails,
    handleAddToFavorite,
    favoritesList,
    recipes,
  } = useContext(GlobalContext);

  const { id } = useParams();
  let details = {};
  const ingredients = [];

  console.log(`id: ${id}`);
  console.log(recipes);
  details = recipes.meals.find((item) => item.idMeal === id);
  console.log(`details`, details);
  setRecipeDetails(details);

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeDetails[`strIngredient${i}`]; //works same as dot notation
    const measure = recipeDetails[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="details-container">
      <div>
        <img
          src={recipeDetails?.strMealThumb}
          alt="img"
          className="details-img"
        />
      </div>
      <div className="details-content">
        <span className="details-publisher">{recipeDetails?.strArea}</span>
        <h3 className="details-title">{recipeDetails?.strMeal}</h3>
        <div>
          <button
            className="details-button"
            onClick={() => handleAddToFavorite(recipeDetails?.recipe)}
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div className="details-ingredients">
          <span>Ingredients:</span>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <span>{recipeDetails.strInstructions}</span>
        </div>
      </div>
    </div>
  );
}
