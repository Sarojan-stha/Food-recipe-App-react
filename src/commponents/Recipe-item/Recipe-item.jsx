import React from "react";
import "./recipe-item.css";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="recipes">
      {console.log(item.title)}
      <img src={item.image_url} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.publisher}</p>
      <Link to={`/recipe-item/${item?.id}`}>Details</Link>
    </div>
  );
};

export default RecipeItem;
