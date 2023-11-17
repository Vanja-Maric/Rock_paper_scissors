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

describe('Choice should allow player to set choice', () => {
  describe.each([
    ['Rock'],
    ['Paper']
  ])('with choice %s', (choice) => {
    test('should set a given choice', () => {
      const player = new Player("Daniel");
      player.setChoice(choice)
      expect(player.choice).toBe(choice);
    });
  });
});