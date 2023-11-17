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
