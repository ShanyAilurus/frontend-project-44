import { getRandomNumber } from '../utils.js';
import {
  greeting, askQuestion, getAnswer, isCorrectAnswer, printCorrect, printWrong, printCongratulations,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0 || a === 1) return 'no';
  }
  return 'yes';
};

const primeGame = () => {
  const num = getRandomNumber(1, 100);
  const trueAnswer = isPrime(num);
  return [num, trueAnswer];
};

const runPrimeGame = () => {
  const userName = greeting(description);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [question, trueAnswer] = primeGame();
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

export default runPrimeGame;
