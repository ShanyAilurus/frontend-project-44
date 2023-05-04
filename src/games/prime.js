import generateGameRounds from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  if (a > 1) {
    for (let i = 2; i < a; i += 1) {
      if (a % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  return 'no';
};

const primeGame = () => {
  const num = getRandomNumber(1, 3);
  const trueAnswer = isPrime(num);
  return [num, trueAnswer];
};

const runPrimeGame = () => {
  generateGameRounds(description, primeGame);
};

export default runPrimeGame;
