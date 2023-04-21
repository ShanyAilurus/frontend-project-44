import readlineSync from 'readline-sync';
import {
  generateRandomNumber, askYourName, trueAnswerWithGCD, wrongAnswer,
} from '../index.js';

const brainGCD = () => {
  const yourName = askYourName();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < 3) {
    const a = generateRandomNumber();
    const b = generateRandomNumber();
    console.log(`Question: ${a} ${b}`);
    const answer = readlineSync.question('Your answer:');
    const trueAnswer = trueAnswerWithGCD(a, b);
    if (Number(answer) === trueAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      wrongAnswer(answer, trueAnswer, yourName);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export default brainGCD;
