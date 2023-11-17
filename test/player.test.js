import { Player } from "../src/Player.js";

describe('Player', () => {
  describe.each([
    ['Daniel'],
    ['Tobias']
  ])('with name %s', (name) => {
    test('should create a player with the given name', () => {
      const player = new Player(name);
      expect(player.name).toBe(name);
    });
  });
});

test('shouldAllowPlayerToSetChoiceRock', () => {
  const player = new Player('Daniel');
  player.setChoice('rock');
  expect(player.choice).toBe('rock');
});