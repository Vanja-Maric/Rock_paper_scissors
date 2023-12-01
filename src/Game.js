import { Ui } from './Ui.js';
import { Player } from './Player.js';

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

  
}