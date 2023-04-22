import readlineSync from 'readline-sync';
import { askYourName, randomInTheRange, trueAnswerWithPrime, wrongAnswer } from '../index.js';

const isPrime = () => {
  const yourName = askYourName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let counter = 0;
  while (counter < 3) {
    const a = randomInTheRange(0, 100);
    const trueAnswer = trueAnswerWithPrime(a);
    console.log(`Question: ${a}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === trueAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      wrongAnswer(answer, trueAnswer, yourName);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}!`);
};

export default isPrime;
