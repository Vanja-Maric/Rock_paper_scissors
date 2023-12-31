import { Ui } from '../src/Ui.js';

import readline from 'readline';

jest.mock('readline');

describe('Ui class', () => {
  let ui;
  let mockInterface;

  beforeEach(() => {
    ui = new Ui();
    mockInterface = {
      question: jest.fn(),
      close: jest.fn(),
    };
    readline.createInterface.mockReturnValue(mockInterface);
  });

  test('takeInInputFromTerminal returns user input', () => {
    const mockInput = "Test input";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));

    return ui.takeInInputFromTerminal("Please enter something: ").then(input => {
      expect(input).toBe(mockInput);
      expect(mockInterface.question).toHaveBeenCalledWith("Please enter something: ", expect.any(Function));
      expect(mockInterface.close).toHaveBeenCalled();
    });
  });

  test('greetingMessage logs the correct message with the user name', () => {
    const mockInput = "Daniel";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();

    return ui.greetingMessage().then(() => {
      expect(console.log).toHaveBeenCalledWith("Hello Daniel");
      expect(mockInterface.question).toHaveBeenCalledWith("Please enter your name: ", expect.any(Function));
      expect(mockInterface.close).toHaveBeenCalled();
    });
  })

  test('greetingMessage should throw exception for empty user name', async () => {
    const mockInput = "";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();
    console.error = jest.fn();

    await expect(ui.greetingMessage()).rejects.toThrow('Username cannot be empty.');
  });

  test('throwErrorIfWrongChoice should throw exception for wrong choice', () => {
    expect(() => ui.throwErrorIfWrongChoice("t")).toThrow('Wrong choice. Please choose again.');
  });


  test('inputChoice should return choice if valid', () => {
    const mockInput = "rock";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();

    return ui.choiceInput().then(choice => {
      expect(choice).toBe(mockInput);
      expect(console.log).toHaveBeenCalledWith("rock");
      expect(mockInterface.question).toHaveBeenCalledWith("Enter 'rock' for rock, 'paper' for paper, and 'scissors' for scissors. \n Please enter your choice: ", expect.any(Function));
      expect(mockInterface.close).toHaveBeenCalled();
    });
  })


  test('presentWinner announces the correct winner', () => {
    const winnerName = "Daniel";
    console.log = jest.fn();

    ui.presentWinner(winnerName);

    expect(console.log).toHaveBeenCalledWith("Daniel wins!");
  });

  test('greetingMessage logs the correct message with the user name', () => {
    const mockInput = "Daniel";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();
    return ui.greetingMessage().then(() => {
      expect(console.log).toHaveBeenCalledWith("Hello Daniel");
      expect(mockInterface.question).toHaveBeenCalledWith("Please enter your name: ", expect.any(Function));
      expect(mockInterface.close).toHaveBeenCalled();
    });
  })

  test('playMessage logs the correct message and returns the correct value', () => {
    const mockInput = "p"; // or "q" to test the quit functionality
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();

    return ui.playMessage().then(result => {
      expect(console.log).toHaveBeenCalledWith("Press p to play, q to quit.");
      if (mockInput === "p") {
        expect(result).toBe(true);
      } else if (mockInput === "q") {
        expect(result).toBe(false);
      }
      expect(mockInterface.question).toHaveBeenCalledWith("Enter: ", expect.any(Function));
      expect(mockInterface.close).toHaveBeenCalled();
    });
  });

  describe('checkPlay method', () => {
    const validTestCases = [
      ["p", true],
      ["q", false],
    ];
    test.each(validTestCases)("checkPlay returns %s for input '%s'", (input, expected) => {
      expect(ui.checkPlay(input)).toBe(expected);
    });
    const invalidTestCases = [
      "t",
      "1",
    ];
    test.each(invalidTestCases)("checkPlay should throw exception for wrong choice '%s'", (input) => {
      expect(() => ui.checkPlay(input)).toThrow('Wrong choice. Please choose again.');
    });
  });

  test('check ExitMessage should log the correct message', () => {
    console.log = jest.fn();
    ui.exitMessage();
    expect(console.log).toHaveBeenCalledWith("Exiting...");
  });
});



