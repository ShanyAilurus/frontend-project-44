import readlineSync from 'readline-sync';
import {
  randomOperator, generateRandomNumber, trueAnswerWithCalc, askYourName,
} from '../index.js';

const brainCalc = () => {
  const yourName = askYourName();
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter < 3) {
    const a = generateRandomNumber();
    const b = generateRandomNumber();
    const operator = randomOperator();
    const trueAnswer = trueAnswerWithCalc(operator, a, b);
    console.log(`Question: ${a} ${operator} ${b}`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === trueAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${yourName}!`);
    }
  }
  return console.log(`Congratulations, ${yourName}!`);
};

export default brainCalc;
