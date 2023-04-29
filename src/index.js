import readlineSync from 'readline-sync';

export const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  return userName;
};

export const askQuestion = (question) => console.log(`Question: ${question}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const isCorrectAnswer = (trueAnswer, answer) => trueAnswer === answer;

export const printCorrect = () => console.log('Correct!');

export const printWrong = (trueAnswer, answer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
};

export const printCongratulations = (userName) => console.log(`Congratulations, ${userName}!`);
