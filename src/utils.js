export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperators = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOperators];
  return operator;
};

export const generateProgression = () => {
  // генерируем и кладём в массив первый символ
  const firstElement = getRandomNumber(1, 100);
  const array = [firstElement];
  // количество элементов в массиве
  const number = getRandomNumber(5, 10);
  // генерируем шаг прогрессиии
  const progressionStep = getRandomNumber(1, 10);
  for (let i = 0; i < number - 1; i += 1) {
    let num1 = array[i];
    num1 += progressionStep;
    // заполняем отстаток массива
    array.push(num1);
  }
  return array;
};
