import React, { useState } from "react";
import "./FloatingCard.css"; // import CSS for styling
import Tables from "../Tableval/tables";
import VitalTable from "../Tableval/vitalTable";
function FloatingCard({ recipe, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

 
  const recipeInstructions = recipe.RecipeInstructions.split("\", \"").map(instruction => {
    return instruction.replace(/^"|"$/g, '');
  });


  const recipeIngredientQuantities = recipe.RecipeIngredientQuantities.split("\", \"").map(quantity => {
    return quantity.replace(/^"|"$/g, '');
  });
  const recipeIngredientParts = recipe.RecipeIngredientParts.split("\", \"").map(part => {
    return part.replace(/^"|"$/g, '');
  });

  const recipeIngredients = recipeIngredientQuantities.map((quantity, index) => {
    return {
      quantity: quantity,
      part: recipeIngredientParts[index]
    };
  });
  let imagesvar;
  if (recipe.Images.split(", ")[0][0] !== "h") {
    imagesvar = recipe.Images.split(", ")[0].slice(1, -1);
  } else {
    imagesvar = recipe.Images.split(", ")[0];
  }

  return (
    <div>
      {isVisible && (
        <div>
          <div className="background-blur"></div>
          <div className="floating-card-wrapper">
            <div className="floating-card">
              <div className="header bg-rose-500">
                <p className="text-6xl m-5 ">{recipe.Name}</p>
                <span className="close-btn" onClick={handleClose}>
                  &times;
                </span>
              </div>
              <div className="content">
              <div className="imgtopcont">
                <div className="image-container">
                  <img src={imagesvar} alt={imagesvar} className="recipe-image" />
                </div>
                <div className="details flex-col ">
                  <Tables recipe={recipe}/>
                  <VitalTable recipe={recipe} />
                </div>
                </div>
                <div className="ingredients">
                <div className="headval bg-rose-500"><p className=" mx-5 text-4xl">Recipe Ingredients</p></div>
                  <div className="ingredev grid grid-cols-3	gap-4">
                    {recipeIngredients.map((ingredient, index) => (
                      (ingredient.quantity !== '' && ingredient.part !== '') ? (
                        <div className="my-2" ><p className="text-2xl">{ingredient.quantity} {ingredient.part}</p></div>
                        ) : null
                      ))}
                  </div>
                </div>
                <div className="instructions ">
                  <div className="headval bg-rose-500 my-3"><p className=" mx-5 text-4xl">Recipe Instructions</p></div>
                    {recipeInstructions.map((instruction, index) => (
                      <p className="text-2xl my-4">{index+1} - {instruction}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingCard;
