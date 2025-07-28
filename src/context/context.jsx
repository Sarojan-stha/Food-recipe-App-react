import { createContext, useContext, useState } from "react";
import React from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  console.log(recipes);

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

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit, recipes }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
