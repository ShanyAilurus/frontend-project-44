export const generateRandomNumber = () => Math.round(Math.random() * 100);

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperators = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOperators];
  return operator;
};

export const generateProgression = () => {
  const firstElement = getRandomNumber(1, 100);
  const array = [firstElement];
  const number = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 10);
  for (let i = 0; i < number - 1; i += 1) {
    let num1 = array[i];
    num1 += progressionStep;
    array.push(num1);
  }
  return array;
};
