import readlineSync from 'readline-sync';

const generateGameRounds = (description, generateRound) => {
  const roundCounter = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundCounter; i += 1) {
    const [question, trueAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (trueAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
      \nLet's try again, ${userName}!`);
      break;
    }
    if (i + 1 === roundCounter) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default generateGameRounds;
