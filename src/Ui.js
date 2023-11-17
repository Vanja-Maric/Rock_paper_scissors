import readline from 'readline';
export class Ui {

  takeInInputFromTerminal(prompt) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question(prompt, (input) => {
        rl.close();
        resolve(input);
      });
    });
  }

  greetingMessage() {
    return this.takeInInputFromTerminal("Please enter your name: ").then(name => {
      console.log("Hello " + name);
    })
  }
}

