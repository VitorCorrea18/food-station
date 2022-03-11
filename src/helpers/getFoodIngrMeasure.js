const MIN_INGR_INDEX = 9;
const MAX_INGR_INDEX = 29;
const MAX_MEASURE_INDEX = 49;

const getIngredientesMeasure = (recipe, setIngrMeasure) => {
  const ingridients = Object.values(recipe).slice(MIN_INGR_INDEX, MAX_INGR_INDEX);
  const filterIngridients = ingridients
    .filter((ingridient) => (ingridient !== '' && ingridient !== null));
  const measures = Object.values(recipe).slice(MAX_INGR_INDEX, MAX_MEASURE_INDEX);
  const filterMeasures = measures
    .filter((measure) => (measure !== ' ' && measure !== null));
  setIngrMeasure({ filterIngridients, filterMeasures });
};

export default getIngredientesMeasure;
