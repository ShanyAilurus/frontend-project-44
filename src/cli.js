import readlineSync from "readline-sync";

const askYourName = () => {
  const yourName = readlineSync.question("May I have your name?: ");

  console.log(`Hello, ${yourName}!`);
};

export { askYourName };
