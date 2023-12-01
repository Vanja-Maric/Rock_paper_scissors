import { Game } from '../src/Game.js';
import { Ui } from '../src/Ui.js';

jest.mock('../src/Ui.js', () => {
  return jest.fn().mockImplementation(() => ({
    greetingMessage: jest.fn(),
    playMessage: jest.fn().mockReturnValue(true),
    choiceInput: jest.fn(),
    exitMessage: jest.fn(),
    presentWinner: jest.fn()
  }));
});

jest.spyOn(Game.prototype, 'start').mockImplementation(() => {});

describe('index', () => {
  beforeEach(() => {
    Game.prototype.start.mockClear();
  });

  test('should call start function from Game class', () => {
    require('../src/index.js');

    expect(Game.prototype.start).toHaveBeenCalled();
  });
});
