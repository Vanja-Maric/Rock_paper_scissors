export class Choices {

  constructor() {
    this.availableChoices = ["rock", "paper", "scissors"];
  }

  determineWinner(thisIsTheArgumentThatWillRepresentTheFirstOption, thisIsTheArgumentThatWillRepresentTheSecondOption) {
    if (thisIsTheArgumentThatWillRepresentTheFirstOption === thisIsTheArgumentThatWillRepresentTheSecondOption) {
      return "tie";
    }
    const winningMap = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    if (winningMap[thisIsTheArgumentThatWillRepresentTheFirstOption] === thisIsTheArgumentThatWillRepresentTheSecondOption) {
      return thisIsTheArgumentThatWillRepresentTheFirstOption;
    } else if (winningMap[thisIsTheArgumentThatWillRepresentTheSecondOption] === thisIsTheArgumentThatWillRepresentTheFirstOption) {
      return thisIsTheArgumentThatWillRepresentTheSecondOption;
    } else {
      throw new Error('Invalid option');
    }
  }

  

}