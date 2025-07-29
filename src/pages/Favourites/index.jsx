import { useContext } from "react";
import RecipeItem from "../../commponents/Recipe-item/Recipe-item";
import { GlobalContext } from "../../context/context";
export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div>
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p>Nothing is added in favorites.</p>
        </div>
      )}
    </div>
  );
}
