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

  test('inputChoice sould return choice if valid', () => {
    const mockInput = "r";
    mockInterface.question.mockImplementation((prompt, callback) => callback(mockInput));
    console.log = jest.fn();

    return ui.greetingMessage().then(() => {
      expect(console.log).toHaveBeenCalledWith("r");
      expect(mockInterface.question).toHaveBeenCalledWith("Please enter your choice: ", expect.any(Function));
      expect(mockInterface.close).toHaveBeenCalled();
    });
  })


});

