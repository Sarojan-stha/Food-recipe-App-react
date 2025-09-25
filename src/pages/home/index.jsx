import Navbar from "../../commponents/navbar/Navbar";
import { GlobalContext, GlobalState } from "../../context/context";
import { useContext } from "react";
import "./home.css";
import RecipeItem from "../../commponents/Recipe-item/Recipe-item";

export default function Home() {
  const { recipes, isLoading } = useContext(GlobalContext);

  return (
    <div className="home">
      {isLoading ? (
        <div>Loading...</div>
      ) : recipes.meals ? (
        recipes.meals.map((recipe) => (
          <RecipeItem key={recipe.id || recipe.name} item={recipe} />
        ))
      ) : (
        <div> "Not found"</div>
      )}
    </div>
  );
}
