const getIngredientesMeasure = (recipe, setIngrMeasure) => {
  const ingrKeys = Object.keys(recipe).filter((key) => key.includes('strIngredient'));
  const ingrValue = ingrKeys.map((key) => recipe[key]);
  const measureKeys = Object.keys(recipe).filter((key) => key.includes('strMeasure'));
  const measureValue = measureKeys.map((key) => recipe[key]);
  const filterIngridients = ingrValue
    .filter((ingridient) => (ingridient !== '' && ingridient !== null));
  const filterMeasures = measureValue
    .filter((measure) => (measure !== ' ' && measure !== null));
  setIngrMeasure({ filterIngridients, filterMeasures });
};

export default getIngredientesMeasure;
