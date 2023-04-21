import readlineSync from 'readline-sync';
import {
  askYourName,
  randomNumberInTheRange,
  trueAnswerWithPrime,
} from '../index.js';

const isPrime = () => {
  const yourName = askYourName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let counter = 0;
  while (counter < 3) {
    const a = randomNumberInTheRange(1, 50);
    const trueAnswer = trueAnswerWithPrime(a);
    console.log(`Question: ${a}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === trueAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${yourName}!`
      );
    }
  }
  return console.log(`Congratulations, ${yourName}!`);
};

export default isPrime;
