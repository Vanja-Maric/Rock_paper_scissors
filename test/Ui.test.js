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
    const mockInput = "r";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();

    return ui.choiceInput().then(() => {
      expect(console.log).toHaveBeenCalledWith("r");
      expect(mockInterface.question).toHaveBeenCalledWith("Please enter your choice: ", expect.any(Function));
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

  test('playMessage presents options', () => {
    const mockMessage = "Press p to play, q to quit.";
    console.log = jest.fn();

    ui.playMessage();
    expect(console.log).toHaveBeenCalledWith(mockMessage);
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

});

