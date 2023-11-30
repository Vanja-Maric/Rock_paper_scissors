import { Game } from "../src/Game.js";
import { Ui } from "../src/Ui.js";

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
});