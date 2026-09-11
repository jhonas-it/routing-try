import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="header">
        <h2>Lola's Kitchen</h2>
        <p>Classic Filipino recipes, mapped straight from the cookbook</p>
      </div>
      <div className="container">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id}>
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-category">{recipe.category}</p>
            <p className="recipe-description">{recipe.description}</p>
            <hr />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to={`/Recipe/${recipe.id}`} state={{ recipe }}>
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;