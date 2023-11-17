import { Choices } from '../src/Choices'

test("Choices should have avalviable choices with length 3", () => {
  const choices = new Choices();
  expect(choices.availableChoices.length).toBe(3);
});