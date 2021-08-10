const getRandom = (
  maxNumber = 100,
  minNumber = 1,
) => Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));

const numberOfAttempts = 3;

export {
  getRandom,
  numberOfAttempts,
};
