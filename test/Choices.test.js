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

describe('Choices', () => {
  let choices;

  beforeEach(() => {
      choices = new Choices();
  });

  describe.each([
      ['rock', 'scissors', 'rock'],
      ['paper', 'rock', 'paper'],
      ['rock', 'paper', 'paper'],
      ['scissors', 'paper', 'scissors'],
      ['paper', 'scissors', 'scissors'],
      ['rock', 'rock', 'tie'],
      ['paper', 'paper', 'tie'],
      ['scissors', 'scissors', 'tie']
  ])('when first choice is %s and second choice is %s', (firstChoice, secondChoice, expectedWinner) => {
      test(`should return '${expectedWinner}'`, () => {
          expect(choices.determineWinner(firstChoice, secondChoice)).toBe(expectedWinner);
      });
  });
});
