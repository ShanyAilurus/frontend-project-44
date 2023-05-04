import generateGameRounds from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (a) => {
  let trueAnswer;
  if (a % 2 === 0) {
    trueAnswer = 'yes';
  } else {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const evenGame = () => {
  const a = getRandomNumber(0, 100);
  const trueAnswer = isEven(a);
  return [a, trueAnswer];
};

const runEvenGame = () => {
  generateGameRounds(description, evenGame);
};

export default runEvenGame;
