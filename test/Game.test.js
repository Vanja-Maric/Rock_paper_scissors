import { Game } from "../src/Game.js";
import { Ui } from "../src/Ui.js";
import { Player } from "../src/Player.js";

jest.mock('../src/Ui.js'); 
describe('Game', () => {
  test('should create a new Ui instance in start function', () => {
    const game = new Game();
    game.start();
    expect(Ui).toHaveBeenCalledTimes(1);
  });

  test('should call greetingMessage on UI class', () => {
    const mockGreetingMessage = jest.fn();
    Ui.mockImplementation(() => {
      return {
        greetingMessage: mockGreetingMessage
      };
    });
    const game = new Game();
    game.start();

    expect(mockGreetingMessage).toHaveBeenCalled();
  });

  test('createHumanPlayer should create one player', () => {
    const game = new Game();
    game.createHumanPlayer();
    expect(game.players.length).toBe(1);
    expect(game.players[0]).toBeInstanceOf(Player);
  });

  test('createHumanPlayer should create one player which name is Human player', () => {
    const game = new Game();
    game.createHumanPlayer();
    expect(game.players[0].name).toBe('Human player');
  });
 
});