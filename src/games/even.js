import generateGameRounds from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const a = getRandomNumber(0, 100);
  const trueAnswer = isEven(a) ? 'yes' : 'no';
  return [a, trueAnswer];
};

const runEvenGame = () => {
  generateGameRounds(description, evenGame);
};

export default runEvenGame;
