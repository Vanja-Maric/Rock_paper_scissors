import { Ui } from '../src/Ui.js';

import readline from 'readline';

jest.mock('readline');

test('askForName logs the correct message', () => {
  console.log = jest.fn();
  const ui = new Ui();
  ui.askForName();
  expect(console.log).toHaveBeenCalledWith("Hello and welcome, please enter your name: ");
});