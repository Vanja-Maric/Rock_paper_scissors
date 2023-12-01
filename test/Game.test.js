import { Choices } from "../src/Choices.js";
import { Game } from "../src/Game.js";
import { Player } from "../src/Player.js";
import { Ui } from "../src/Ui.js";

jest.mock('../src/Choices.js');
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


  test('setComputerChoice should set a valid choice for the computer player', () => {
    const game = new Game();
    game.createHumanPlayer();
    game.createComputerPlayer();
    game.setComputerChoice();

    // Define the expected choices
    const expectedChoices = ["rock", "paper", "scissors"];

    // Ensure the choice is one of the expected choices
    expect(expectedChoices).toContain(game.players[1].choice);
  });

  test('determine winner options calls choices class', () => {
    // Define choices and expected winner
    const humanChoice = 'rock';
    const computerChoice = 'paper';
    const expectedWinner = 'Computer player'; // Adjust based on your game logic

    const mockDetermineWinner = jest.fn().mockReturnValue(computerChoice);
    Choices.mockImplementation(() => {
      return {
        determineWinner: mockDetermineWinner
      };
    });

    const game = new Game();
    game.createHumanPlayer();
    game.createComputerPlayer();

    game.players[0].setChoice(humanChoice);
    game.players[1].setChoice(computerChoice);

    const winner = game.determineWinner();

    expect(mockDetermineWinner).toHaveBeenCalledWith(humanChoice, computerChoice);
    expect(winner).toBe(expectedWinner);
  });

});
