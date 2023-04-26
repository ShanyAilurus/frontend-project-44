import generateRoundofAnyGame from '../index.js';
import { randomInTheRange, trueAnswerWithEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenOrNot = () => {
  const a = randomInTheRange(0, 100);
  const trueAnswer = trueAnswerWithEven(a);
  return [a, trueAnswer];
};

const runEvenGame = () => {
  generateRoundofAnyGame(description, evenOrNot);
};

export default runEvenGame;
