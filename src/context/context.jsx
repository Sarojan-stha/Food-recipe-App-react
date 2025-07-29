import { createContext, useContext, useState } from "react";
import React from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  console.log(recipes);

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavoritesList(cpyFavoritesList);
  }

  console.log(favoritesList, "favoritesList");

  async function handleSubmit() {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const datas = await response.json();
      const { data } = datas;
      setRecipes(data.recipes);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleDetails(id) {}

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, recipes }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
