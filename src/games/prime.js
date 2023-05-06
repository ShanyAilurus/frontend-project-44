import generateGameRounds from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  if (a === 1) return false;
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const a = getRandomNumber(1, 100);
  const trueAnswer = isPrime(a) ? 'yes' : 'no';
  return [a, trueAnswer];
};

const runPrimeGame = () => {
  generateGameRounds(description, primeGame);
};

export default runPrimeGame;
