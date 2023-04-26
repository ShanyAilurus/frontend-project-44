import generateRoundofAnyGame from '../index.js';
import { randomInTheRange, trueAnswerWithPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const num = randomInTheRange(1, 100);
  const trueAnswer = trueAnswerWithPrime(num);
  return [num, trueAnswer];
};

const runPrimeGame = () => {
  generateRoundofAnyGame(description, primeGame);
};

export default runPrimeGame;
