const getRandom = (
  maxNumber = 100,
  minNumber = 1,
) => Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));

export {
  getRandom as default,
};
