import {
  fetchRandomFood,
  fetchRandomDrink,
} from '../services/fetchRandomRecipe';

const callFetchRandomRecipe = async (setFoodRandom, setDrinkRandom) => {
  // foods
  const randomFood = await fetchRandomFood();
  setFoodRandom(randomFood);

  // drinks
  const randomDrink = await fetchRandomDrink();
  setDrinkRandom(randomDrink);
};

export default callFetchRandomRecipe;
