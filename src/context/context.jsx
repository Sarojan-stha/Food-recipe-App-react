import { createContext, useContext, useState } from "react";
import React from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState({});
  const [favoritesList, setFavoritesList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.idMeal === getCurrentItem.idMeal
    );

    console.log(index);

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index, 1);
    }

    setFavoritesList(cpyFavoritesList);
  }

  console.log(favoritesList, "favoritesList");

  async function handleSubmit() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`
      );
      const result = await response.json();

      const recipesData = result;

      if (recipesData?.meals.length > 0) {
        setRecipes(recipesData);
      } else {
        setRecipes({});
      }
      console.log(recipes);

      setSearchParam("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setIsLoading(false);
    }
  }

  function handleDetails(id) {}

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipes,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
