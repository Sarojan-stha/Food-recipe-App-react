import Navbar from "../../commponents/navbar/Navbar";
import { GlobalContext, GlobalState } from "../../context/context";
import { useContext } from "react";
import "./../../App.css";

export default function Home() {
  const { recipes } = useContext(GlobalContext);

  return (
    <div>
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div className="recipes">
              {console.log(recipe.title)}
              <img src={recipe.image_url} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.publisher}</p>
              <button onClick={() => handleDetails(recipe.id)}>
                More details
              </button>
            </div>
          );
        })}
    </div>
  );
}
