import { Player } from"../src/Player.js";

describe('Player', () => {
    describe.each([
        ['Daniel'],
        ['Tobias']
    ])('with name %s', (name) => {
        it('should create a player with the given name', () => {
            const player = new Player(name);
            expect(player.name).toBe(name);
        });
    });
});