import { Choices } from '../src/Choices'

test("Choices should have avalviable choices with length 3", () => {
  const choices = new Choices();
  expect(choices.avalviableChoices.length).toBe(3);
});