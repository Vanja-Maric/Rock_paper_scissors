import { Choices } from './Choices.js';
import { Player } from './Player.js';
import { Ui } from './Ui.js';


export class Game {
  players = [];

  constructor() {
  }

  start() {
    const ui = new Ui();
    ui.greetingMessage();
    ui.playMessage();
  }

  createHumanPlayer() {
    this.players.push(new Player("Human player"));
  }

  createComputerPlayer() {
    this.players.push(new Player("Computer player"));
  }

  play(boolean) {
    const ui = new Ui();
    if (boolean === false) {
      ui.exitMessage();
    } else {
      this.createHumanPlayer();
      this.createComputerPlayer();
      const humanChoice = ui.choiceInput();
    }
  }

  setHumanChoice(choice) {
    this.players[0].setChoice(choice);
  }

  setComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    this.players[1].setChoice(choices[randomChoice]);
  }

  /*determineWinner() {
    const choices = new Choices();
    const winningChoice = choices.determineWinner(this.players[0].choice, this.players[1].choice);
    console.log("Human Player chose: " + this.players[0].choice + "and Computer player chose: "+ this.players[1].choice);
    if (winningChoice == this.players[0].choice) {
      return this.players[0].name;
    } else if (winningChoice == this.players[1].choice) {
      return this.players[1].name;
    } else {
      return "tie";
    }

  }*/



}