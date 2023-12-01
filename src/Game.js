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




}