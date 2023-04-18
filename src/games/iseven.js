import readlineSync from 'readline-sync';

const askYourName = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${yourName}!`);

  const isEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let counter = 0;

    while (counter < 3) {
      const a = Math.round(Math.random() * 100);
      let trueAnswer;

      if (a % 2 === 0) {
        trueAnswer = 'yes';
      } else {
        trueAnswer = 'no';
      }

      console.log(`Question: ${a}`);
      const answer = readlineSync.question('Your answer:');

      if (answer.toString() === trueAnswer) {
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

  isEven();
};

export default askYourName;
