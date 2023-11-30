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
      if (name === "") {
        this.throwEmptyUsernameException();
      }
      console.log("Hello " + name);
    })
  }

  throwEmptyUsernameException() {
    throw new Error('Username cannot be empty.');
  }

  async choiceInput() {
    const choice = await this.takeInInputFromTerminal("Please enter your choice: ");
    this.throwErrorIfWrongChoice(choice);
    console.log(choice);
  }

  throwErrorIfWrongChoice(choice) {
    if (choice !== "r" && choice !== "p" && choice !== "s") {
      throw new Error('Wrong choice. Please choose again.');
    }
  }

  presentWinner(name) {
    console.log(name + " wins!")
  }

  playMessage() {
    console.log("Press p to play, q to quit.");
  }
  
}