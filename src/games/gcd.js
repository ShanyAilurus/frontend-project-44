import readlineSync from 'readline-sync';
import {
  generateRandomNumber,
  askYourName,
  trueAnswerWithGCD,
} from '../index.js';

const brainGCD = () => {
  const yourName = askYourName();
  console.log('What is the result of the expression?');

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
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${yourName}!`
      );
    }
  }
  return console.log(`Congratulations, ${yourName}!`);
};

export default brainGCD;
