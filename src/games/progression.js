import generateGameRounds from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstElement = getRandomNumber(1, 100);
  const progression = [firstElement];
  const number = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 10);
  for (let i = 0; i < number - 1; i += 1) {
    let num1 = progression[i];
    num1 += progressionStep;
    progression.push(num1);
  }
  return progression;
};

const progressionGame = () => {
  const resultProgression = generateProgression();
  const rand = Math.floor(Math.random() * resultProgression.length);
  const hiddenElement = resultProgression.splice(rand - 1, 1, '..');
  const finishProgression = resultProgression.join(' ');
  const trueAnswer = hiddenElement.toString();
  return [finishProgression, trueAnswer];
};

const runProgressionGame = () => {
  generateGameRounds(description, progressionGame);
};

export default runProgressionGame;
