import { Choices } from '../src/Choices'

test("Choices should have avalviable choices with length 3", () => {
  const choices = new Choices();
  expect(choices.availableChoices.length).toBe(3);
});

test("Choices should have rock at index 1 in avalviable choices ", () => {
  const choices = new Choices();
  expect(choices.availableChoices[0]).toBe("rock");
});