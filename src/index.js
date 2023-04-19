import readlineSync from 'readline-sync';

export const askYourName = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${yourName}!`);
  return yourName;
};

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperators = Math.floor(Math.random() * operators.length);
  const operator = operators[randomOperators];
  return operator;
};

export const generateRandomNumber = () => Math.round(Math.random() * 100);

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
