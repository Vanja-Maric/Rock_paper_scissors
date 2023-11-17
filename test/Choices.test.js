import { Choices } from '../src/Choices'

test("Choices should have avalviable choices with length 3", () => {
  const choices = new Choices();
  expect(choices.availableChoices.length).toBe(3);
});

test("Choices should have rock at index 0 in avalviable choices ", () => {
  const choices = new Choices();
  expect(choices.availableChoices[0]).toBe("rock");
});

test("Choices should have paper at index 1 in avalviable choices ", () => {
  const choices = new Choices();
  expect(choices.availableChoices[1]).toBe("paper");
});

test("Choices should have paper at index 2 in avalviable choices ", () => {
  const choices = new Choices();
  expect(choices.availableChoices[2]).toBe("scissors");
});

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
