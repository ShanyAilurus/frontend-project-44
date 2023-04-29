import { getRandomNumber } from '../utils.js';
import {
  greeting, askQuestion, getAnswer, isCorrectAnswer, printCorrect, printWrong, printCongratulations,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const result = a + b;
  return result.toString();
};

const gcdGame = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = getGCD(num1, num2);
  return [question, trueAnswer];
};

const runGcdGame = () => {
  const userName = greeting(description);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [question, trueAnswer] = gcdGame();
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

export default runGcdGame;
