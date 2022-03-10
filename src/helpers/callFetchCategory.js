import { fetchDrinksCategory, fetchFoodsCategory } from '../services/fetchCategorys';
import { FIRST_FIVE } from './constants';

// chama a fetchFoodsCategory e fetchDrinksCategory
// para ser usada no useEffect() do provider que não pode receber função assíncrona.
const callFetchCategory = async (setFoodCategory, setDrinkCategory) => {
  // foods
  const foodCategory = await fetchFoodsCategory();
  setFoodCategory(foodCategory.filter((food, index) => index < FIRST_FIVE));

  // drinks
  const drinkCategory = await fetchDrinksCategory();
  setDrinkCategory(drinkCategory.filter((drink, index) => index < FIRST_FIVE));
};

export default callFetchCategory;
