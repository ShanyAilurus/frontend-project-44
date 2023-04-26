import generateRoundOfAnyGame from '../index.js';
import { randomInTheRange, trueAnswerWithGCD } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const num1 = randomInTheRange(1, 100);
  const num2 = randomInTheRange(1, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = trueAnswerWithGCD(num1, num2);
  return [question, trueAnswer];
};

const runGcdGame = () => {
  generateRoundOfAnyGame(description, gcdGame);
};

export default runGcdGame;
