import readlineSync from 'readline-sync';

export const askYourName = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${yourName}!`);
  return yourName;
};

export const generateRandomNumber = () => Math.round(Math.random() * 100);

export const randomInTheRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const trueAnswerIsEven = (a) => {
  let trueAnswer;
  if (a % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperators = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOperators];
  return operator;
};

export const trueAnswerWithCalc = (operator, a, b) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
      break;
  }
  return `${result}`;
};

export const trueAnswerWithGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export const trueAnswerWithPrime = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) return 'no';
  }
  return 'yes';
};

export const generateProgression = () => {
  // генерируем и кладём в массив первый символ
  const firstElement = randomInTheRange(1, 100);
  const array = [firstElement];
  // количество элементов в массиве
  const number = randomInTheRange(5, 10);
  // генерируем шаг прогрессиии
  const progressionStep = randomInTheRange(1, 10);
  for (let i = 0; i < number - 1; i += 1) {
    let num1 = array[i];
    num1 += progressionStep;
    // заполняем отстаток массива
    array.push(num1);
  }
  return array;
};

export const wrongAnswer = (answer, trueAnswer, yourName) => {
  console.log(`"${answer}" is a wrong answer ;(. The correct answer was "${trueAnswer}".\nLet's try again, ${yourName}!`);
};
