import { fetchInicialFoodData } from '../services/fetchInicialData';
import { fetchFoodByNationality } from '../services/fetchNationality';
import { FIRST_TWELVE } from './constants';

const applyNationalityFilter = async (area, setFoodData) => {
  if (area === 'All') {
    const data = await fetchInicialFoodData();
    setFoodData(data.filter((food, index) => index < FIRST_TWELVE));
  } else {
    const data = await fetchFoodByNationality(area);
    setFoodData(data.filter((food, index) => index < FIRST_TWELVE));
  }
};

export default applyNationalityFilter;
