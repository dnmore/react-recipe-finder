import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { CardContainer, CardBackgroundImage, CardBodyContainer, RecipeLink } from "./recipe-card.styles";

const RecipeCard = ({ card }) => {
  const { idMeal, strMeal, strMealThumb } = card;
  return (
    <CardContainer>
       
      <CardBackgroundImage>
        <img src={strMealThumb} alt={strMeal} />
      </CardBackgroundImage>
     <CardBodyContainer>
        <h4>{strMeal}</h4>
        <RecipeLink
          to="/recipe"
          state={{ from: `${idMeal}` }}
        >
          RECIPE
          <ArrowRight />
        </RecipeLink>
      </CardBodyContainer>
    </CardContainer>
  );
};

export default RecipeCard;
