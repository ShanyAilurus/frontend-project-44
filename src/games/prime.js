import generateGameRounds from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0 || a === 1) return 'no';
  }
  return 'yes';
};

const primeGame = () => {
  const num = getRandomNumber(1, 100);
  const trueAnswer = isPrime(num);
  return [num, trueAnswer];
};

const runPrimeGame = () => {
  generateGameRounds(description, primeGame);
};

export default runPrimeGame;
