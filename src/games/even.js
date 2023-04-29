import { getRandomNumber } from '../utils.js';
import {
  greeting, askQuestion, getAnswer, isCorrectAnswer, printCorrect, printWrong, printCongratulations,
} from '../index.js';

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
  const userName = greeting(description);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [question, trueAnswer] = evenGame();
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

export default runEvenGame;
