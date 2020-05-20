import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";
import { Player } from "video-react";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      const { meals } = response.data;
      setMeals(meals);
    });
  }, []);

  return (
    <div>
      {meals.map((meal) => (
        <>
          <p>{meal.strMeal}</p>
          <p>Categoria: {meal.strCategory}</p>
          <p>Area: {meal.strArea}</p>
          <p>Instruções: {meal.strInstructions}</p>
          <p>Tags: {meal.strTags}</p>
          <img src={meal.strMealThumb} />
        </>
      ))}
    </div>
  );
}

export default App;
