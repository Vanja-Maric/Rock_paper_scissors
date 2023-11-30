import { Game } from "../src/Game.js";
import { Ui } from "../src/Ui.js";

jest.mock('../src/Ui.js'); 
describe('Game', () => {
  test('should create a new Ui instance in start function', () => {
    const game = new Game();
    game.start();
    expect(Ui).toHaveBeenCalledTimes(1);
  });
});