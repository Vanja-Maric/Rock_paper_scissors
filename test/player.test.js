
describe("player's test cases", () => {
  test("player name to be Daniel", () => {
  const player = new Player("Daniel");
  expect(player.name).toBe("Daniel");
  }); 
});