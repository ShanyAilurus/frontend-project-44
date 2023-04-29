import { generateProgression } from '../utils.js';
import {
  greeting, askQuestion, getAnswer, isCorrectAnswer, printCorrect, printWrong, printCongratulations,
} from '../index.js';

const description = 'What number is missing in the progression?';

const progressionGame = () => {
  const newArr = generateProgression();
  const rand = Math.floor(Math.random() * newArr.length);
  const hiddenElement = newArr.splice(rand - 1, 1, '..');
  const newString = newArr.join(' ');
  const trueAnswer = hiddenElement.toString();
  return [newString, trueAnswer];
};

const runProgressionGame = () => {
  const userName = greeting(description);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [question, trueAnswer] = progressionGame();
    askQuestion(question);
    const answer = getAnswer();
    if (isCorrectAnswer(trueAnswer, answer)) {
      printCorrect();
    } else {
      printWrong(trueAnswer, answer, userName);
      return;
    }
  }
  printCongratulations(userName);
};

export default runProgressionGame;
