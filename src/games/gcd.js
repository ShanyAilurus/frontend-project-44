import readlineSync from 'readline-sync';
import {
  randomInTheRange, askYourName, trueAnswerWithGCD, wrongAnswer,
} from '../index.js';

const brainGCD = () => {
  const yourName = askYourName();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < 3) {
    const num1 = randomInTheRange(1, 100);
    const num2 = randomInTheRange(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    const trueAnswer = trueAnswerWithGCD(num1, num2);
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
