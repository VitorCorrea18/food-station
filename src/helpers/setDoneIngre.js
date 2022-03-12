export const handleSelect = (index, done, setDone) => {
  if (done.length === 0) return setDone([index]);
  const findIngre = done.find((ingre) => ingre === index);
  if (findIngre === undefined) return setDone([...done, index]);
  const filterIngre = done.filter((data) => data !== index);
  return setDone(filterIngre);
};

export const setDoneClass = (index, done) => {
  const findIngre = done.find((ingre) => ingre === index);
  if (findIngre === undefined) return 'notDone';
  return 'Done';
};
