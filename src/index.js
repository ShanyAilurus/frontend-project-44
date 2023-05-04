import readlineSync from 'readline-sync';

const generateGameRounds = (description, generateRound) => {
  const counter = 3;
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(description);

  for (let i = 0; i < counter; i += 1) {
    const [question, trueAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (trueAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
      \nLet's try again, ${yourName}!`);
      break;
    }
    if (i + 1 === counter) {
      console.log(`Congratulations, ${yourName}!`);
    }
  }
};

export default generateGameRounds;
