import React from "react";
import "./recipe-item.css";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="recipes">
      <img src={item.strMealThumb} alt={item.strMeal} />
      <h3>{item.strMeal}</h3>
      <p>{item.strTags}</p>
      <Link to={`/recipe-item/${item?.idMeal}`}>Details</Link>
    </div>
  );
};

export default RecipeItem;
