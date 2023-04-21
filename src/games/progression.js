import readlineSync from 'readline-sync';
import { askYourName, generateProgression } from '../index.js';

const progression = () => {
  const yourName = askYourName();
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < 3) {
    const newArr = generateProgression();
    const rand = Math.floor(Math.random() * newArr.length);
    const hiddenElement = newArr.splice(rand - 1, 1, '..');
    console.log(`Question: ${newArr}`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === Number(hiddenElement)) {
      console.log('Correct!');
      counter += 1;
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${hiddenElement}'\nLet's try again, ${yourName}!`
      );
    }
  }
  return console.log(`Congratulations, ${yourName}!`);
};

export default progression;