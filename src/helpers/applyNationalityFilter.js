import { fetchFoodByNationality } from '../services/fetchNationality';
import { FIRST_TWELVE } from './constants';

const applyNationalityFilter = async (area, setFoodData) => {
  const data = await fetchFoodByNationality(area);
  setFoodData(data.filter((food, index) => index < FIRST_TWELVE));
};

export default applyNationalityFilter;
