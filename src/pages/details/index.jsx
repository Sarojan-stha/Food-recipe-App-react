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
  } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    }
    fetchDetails();
  }, [id]);

  return (
    <div className="details-container">
      <div>
        <img
          src={recipeDetails?.recipe.image_url}
          alt="img"
          className="details-img"
        />
      </div>
      <div className="details-content">
        <span className="details-publisher">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="details-title">{recipeDetails?.recipe?.title}</h3>
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
            {recipeDetails?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>
                  {ingredient.quantity} {ingredient.unit}
                </span>{" "}
                - <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
