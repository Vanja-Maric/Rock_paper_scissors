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
});
