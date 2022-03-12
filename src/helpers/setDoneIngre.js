export const verifyDoneStorage = (type, id, setDone) => {
  const inProgressRecipes = localStorage.getItem('inProgressRecipes');
  if (inProgressRecipes) {
    const dadosSalvos = JSON.parse(inProgressRecipes);
    if (Object.keys(dadosSalvos[type]).length > 0) {
      const idsInProgress = Object.keys(dadosSalvos[type]);
      const findRecipe = idsInProgress
        .find((data) => data === id);
      if (findRecipe !== undefined) {
        const array = dadosSalvos[type][findRecipe];
        return setDone(array);
      }
    }
  }
  if (inProgressRecipes === null) {
    localStorage
      .setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
  }
};

export const setDoneClass = (index, done) => {
  const findIngre = done.find((ingre) => ingre === index);
  if (findIngre === undefined) return 'notDone';
  return 'Done';
};

export const saveInProgressaRecipe = (type, id, done) => {
  const inProgressRecipes = localStorage.getItem('inProgressRecipes');
  const dadosSalvos = JSON.parse(inProgressRecipes);
  let saveId = {};
  if (Object.keys(dadosSalvos[type]).length === 0) {
    saveId = { [id]: done };
  }
  if (Object.keys(dadosSalvos[type]).length > 0) {
    saveId = { ...dadosSalvos[type], [id]: done };
  }
  const newData = { ...dadosSalvos, [type]: saveId };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newData));
};

export function handleSelect(object) {
  const { type, id, index, done, setDone } = object;
  if (done.length === 0) {
    setDone([index]);
    return saveInProgressaRecipe(type, id, [index]);
  }
  const findIngre = done.find((ingre) => ingre === index);
  if (findIngre === undefined) {
    setDone([...done, index]);
    return saveInProgressaRecipe(type, id, [...done, index]);
  }
  const filterIngre = done.filter((data) => data !== index);
  setDone(filterIngre);
  saveInProgressaRecipe(type, id, filterIngre);
}
