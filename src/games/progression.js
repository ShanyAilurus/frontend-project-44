import generateRoundOfAnyGame from '../index.js';
import { generateProgression } from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionGame = () => {
  const newArr = generateProgression();
  const rand = Math.floor(Math.random() * newArr.length);
  const hiddenElement = newArr.splice(rand - 1, 1, '..');
  const newString = newArr.join(' ');
  const trueAnswer = hiddenElement;
  return [newString, trueAnswer];
};

const runProgressionGame = () => {
  generateRoundOfAnyGame(description, progressionGame);
};

export default runProgressionGame;
