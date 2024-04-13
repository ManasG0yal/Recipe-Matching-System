import React, { useState } from "react";
import "./cardstyle.css";
import FloatingCard from "./floatingcard"

function Cards(props) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = async (recipe) => {
    setIsLoading(true);
    // Simulate loading delay, replace this with your actual data fetching logic
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    setSelectedRecipe(recipe);
    setIsLoading(false);
  };

  return (
    <div>
      {selectedRecipe && !isLoading && <FloatingCard recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
      {isLoading && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <div className="loading-text">Loading Recipe...</div>
        </div>
      )}
      <div className="cards-container">
        {props?.sdata.map((obj, index) => {
          let imagesvar;
          if (obj.Images.split(", ")[0][0] !== "h") {
            imagesvar = obj.Images.split(", ")[0].slice(1, -1);
          } else {
            imagesvar = obj.Images.split(", ")[0];
          }
          return (
            <div className="card" onClick={() => handleCardClick(obj)} key={index}>
              <img
                className="card-image"
                src={imagesvar}
                alt="Sunset in the mountains"
              />
              <div className="card-content">
                <div className="card-title">{obj["Name"]}</div>
                <div className="card-type">
                  <p><b>Recipe Category : </b> {obj.RecipeCategory}</p>
                </div>
              </div>
              <div className="card-tags flex-row justify-around">
                <span className="card-tag">
                  <b>Calories : </b> {obj.Calories} Kcal
                </span>
                <span className="card-tag">
                  <b>Cook Time : </b> {obj.CookTime.slice(2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
