import generateRoundofAnyGame from '../index.js';
import { randomInTheRange, randomOperator, trueAnswerWithCalc } from '../utils.js';

const description = 'What is the result of the expression?.';

const calcGame = () => {
  const num1 = randomInTheRange(0, 100);
  const num2 = randomInTheRange(0, 100);
  const operator = randomOperator();
  const trueAnswer = trueAnswerWithCalc(operator, num1, num2);
  const question = `${num1} ${operator} ${num2}`;

  return [question, trueAnswer];
};

const runCalcGame = () => {
  generateRoundofAnyGame(description, calcGame);
};

export default runCalcGame;
