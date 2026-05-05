import React, { useEffect, useState } from "react";
import getMeals from "./services/mealService";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await getMeals();
      if (res) {
        setMeals(res.data.data.data);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="container">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="card">
          
          {/* Image */}
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="image"
          />

          <div className="content">
            {/* Title */}
            <h3 className="title">{meal.strMeal}</h3>

            {/* Meta */}
            <div className="meta">
              <p><b>Category:</b> {meal.strCategory}</p>
              <p><b>Area:</b> {meal.strArea}</p>
            </div>

            {/* Ingredients */}
            <div className="ingredients">
              <b>Ingredients:</b>
              <ul>
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];

                  if (ingredient && ingredient.trim() !== "") {
                    return (
                      <li key={i}>
                        {ingredient} - {measure}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>

            {/* Instructions */}
            <p className="instructions">
              <b>Instructions:</b>{" "}
              {meal.strInstructions.slice(0, 80)}...
            </p>

            {/* YouTube */}
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Watch Recipe 🎥
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meals;