import { Ui } from './Ui.js';
import { Player } from './Player.js';

export class Game {
  players = [];

  constructor() { 
  }

  start() {
   const ui = new Ui();
    ui.greetingMessage();
  }

  createHumanPlayer() {
    this.players.push(new Player("Human player"));
  }
}