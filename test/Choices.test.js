import { Choices } from '../src/Choices'

describe("Choices", () => {
  const testCases = [
    ["rock", 0],
    ["paper", 1],
    ["scissors", 2],
  ];

  test.each(testCases)("should have %p at index %i in available choices", (expectedChoice, index) => {
    const choices = new Choices();
    expect(choices.availableChoices[index]).toBe(expectedChoice);
  });
});


  test("should return 'rock' if rock vs. scissors", () => {
    const choices = new Choices();
    expect(choices.determineWinner("rock", "scissors")).toBe("rock");
  });

  test("should return 'paper' if paper vs rock", () => {
    const choices = new Choices();
    expect(choices.determineWinner("paper", "rock")).toBe("paper");
  });

  test("should return 'paper' if rock vs paper", () => {
    const choices = new Choices();
    expect(choices.determineWinner("rock", "paper")).toBe("paper");
  });

  test("should return 'scissors' if scissors vs paper", () => {
    const choices = new Choices();
    expect(choices.determineWinner("scissors", "paper")).toBe("scissors");
  });

  test("should return 'scissors' if paper vs scissors", () => {
    const choices = new Choices();
    expect(choices.determineWinner("paper", "scissors")).toBe("scissors");
  });