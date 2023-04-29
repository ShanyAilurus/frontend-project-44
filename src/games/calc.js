import { getRandomNumber, randomOperator } from '../utils.js';
import {
  greeting, askQuestion, getAnswer, isCorrectAnswer, printCorrect, printWrong, printCongratulations,
} from '../index.js';

const description = 'What is the result of the expression?.';

const calculate = (operator, a, b) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
      break;
  }
  return result.toString();
};

const calcGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operator = randomOperator();
  const trueAnswer = calculate(operator, num1, num2);
  const question = `${num1} ${operator} ${num2}`;
  return [question, trueAnswer];
};

const runCalcGame = () => {
  const userName = greeting(description);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [question, trueAnswer] = calcGame();
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

export default runCalcGame;
