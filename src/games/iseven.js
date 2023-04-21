import readlineSync from 'readline-sync';
import {
  generateRandomNumber, trueAnswerIsEven, askYourName, wrongAnswer,
} from '../index.js';

const isEven = () => {
  const yourName = askYourName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const a = generateRandomNumber();
    const trueAnswer = trueAnswerIsEven(a);

    console.log(`Question: ${a}`);
    const answer = readlineSync.question('Your answer:');

    if (answer.toString() === trueAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      wrongAnswer(answer, trueAnswer, yourName);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export default isEven;
