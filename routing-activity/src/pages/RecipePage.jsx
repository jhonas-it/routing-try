import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import "./RecipePage.css";

const RecipePage = () => {
  const recipeData = useLocation().state.recipe;
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{`${recipeData.title} | Recipe`}</title>
      </Helmet>

      <div className="recipe-page">
        <button className="go-back" onClick={() => navigate(-1)}>
          Go Back
        </button>

        <div className="recipe-profile">
          <div className="information-summary">
            <div className="information-card center">
              <div className="circle-avatar">{recipeData.title.charAt(0)}</div>
              <p className="information-title recipe-name">{recipeData.title}</p>
              <p className="recipe-type">{recipeData.category}</p>
            </div>
          </div>

          <div className="recipe-details">
            <h2 className="recipe-information">Recipe Information</h2>
            <div className="information-card">
              <div className="information">
                <p className="information-title">Servings</p>
                <p>{recipeData.servings}</p>
              </div>
              <hr />
              <div className="information">
                <p className="information-title">Prep Time</p>
                <p>{recipeData.timing.prep}</p>
              </div>
              <hr />
              <div className="information">
                <p className="information-title">Cook Time</p>
                <p>{recipeData.timing.cook}</p>
              </div>
              <hr />
              <div className="information">
                <p className="information-title">Description</p>
                <p>{recipeData.description}</p>
              </div>
              <hr />
              <div className="information ingredients-block">
                <p className="information-title">Ingredients</p>
                <ul>
                  {recipeData.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;