import generateGameRounds from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?.';

const calculate = (operator, a, b) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      throw new Error('Operator not selected');
  }
  return result.toString();
};

const calcGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const trueAnswer = calculate(operator, num1, num2);
  const question = `${num1} ${operator} ${num2}`;

  return [question, trueAnswer];
};

const runCalcGame = () => {
  generateGameRounds(description, calcGame);
};

export default runCalcGame;
