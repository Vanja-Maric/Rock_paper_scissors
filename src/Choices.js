export class Choices {

  constructor() {
    this.availableChoices = ["rock", "paper", "scissors"];
  }

  determineWinner(firstOption, secondOption) {
    if (firstOption === secondOption) {
      return "tie";
    }
    const winningMap = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    if (winningMap[firstOption] === secondOption) {
      return firstOption;
    } else if (winningMap[secondOption] === firstOption) {
      return secondOption;
    } else {
      throw new Error('Invalid option');
    }
  }

  

}