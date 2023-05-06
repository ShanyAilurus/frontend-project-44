import generateGameRounds from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstElement = getRandomNumber(1, 100);
  const array = [firstElement];
  const number = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 10);
  for (let i = 0; i < number - 1; i += 1) {
    let num1 = array[i];
    num1 += progressionStep;
    array.push(num1);
  }
  return array;
};

const progressionGame = () => {
  const newArr = generateProgression();
  const rand = Math.floor(Math.random() * newArr.length);
  const hiddenElement = newArr.splice(rand - 1, 1, '..');
  const newString = newArr.join(' ');
  const trueAnswer = hiddenElement.toString();
  return [newString, trueAnswer];
};

const runProgressionGame = () => {
  generateGameRounds(description, progressionGame);
};

export default runProgressionGame;
