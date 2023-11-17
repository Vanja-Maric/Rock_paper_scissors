export class Choices {

  constructor() {
    this.availableChoices = ["rock", "paper", "scissors"];
  }

  determineWinner(firstOption, secondOption) {
    if (firstOption === "rock" || secondOption === "rock") {
      if (firstOption === "scissors" || secondOption === "scissors") {
        return "rock";
      }
    }
    if (firstOption === "paper" || secondOption === "paper") {
      if (firstOption === "rock" || secondOption === "rock") {
        return "paper";
      }
    }
    if (firstOption === "scissors" && secondOption === "paper") {
      return "scissors";
    }
  }


}