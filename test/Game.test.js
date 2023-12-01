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

  test('createComputerPlayer should create second player', () => {
    const game = new Game();
    game.createComputerPlayer();
    expect(game.players.length).toBe(1);
    expect(game.players[0]).toBeInstanceOf(Player);
  });

  test('createComputerPlayer should create one player which name is Computer player', () => {
    const game = new Game();
    game.createComputerPlayer();
    expect(game.players[0].name).toBe('Computer player');
  });

  test('should call greetingMessage and playMessage on UI class', () => {
    const mockGreetingMessage = jest.fn();
    const mockPlayMessage = jest.fn();
    Ui.mockImplementation(() => {
      return {
        greetingMessage: mockGreetingMessage,
        playMessage: mockPlayMessage
      };
    });
    const game = new Game();
    game.start();

    expect(mockGreetingMessage).toHaveBeenCalled()
    expect(mockPlayMessage).toHaveBeenCalled();
  });

  test('should display exit message if play takes boolean false', () => {
    const mockExitMessage = jest.fn();
    Ui.mockImplementation(() => {
      return {
        exitMessage: mockExitMessage
      };
    });
    const game = new Game();
    game.play(false);

    expect(mockExitMessage).toHaveBeenCalled();
  });


  test('should call createHumanPlayer and createComputerPlayer if play takes boolean true', () => {

    const mockChoiceInput = jest.fn();
    Ui.mockImplementation(() => {
      return {
        choiceInput: mockChoiceInput
      };
    });

    const game = new Game();

    jest.spyOn(game, 'createHumanPlayer');
    jest.spyOn(game, 'createComputerPlayer');

    game.play(true);
    expect(game.createHumanPlayer).toHaveBeenCalled()
    expect(game.createComputerPlayer).toHaveBeenCalled()
    expect(game.players.length).toBe(2);
    expect(mockChoiceInput).toHaveBeenCalled()
  })

  test('should call setHumanChoice with choice', () => {
    const game = new Game();
    game.createHumanPlayer();
    game.setHumanChoice('rock');
    expect(game.players[0].choice).toBe('rock');
  })

});
