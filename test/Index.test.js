import '..src/index.js';

decsribe ('index', () => {
  test('should call start function from game class', () => {
    const mockStart = jest.fn();
    Game.mockImplementation(() => {
      return {
        start: mockStart
      };
    });
    index();
    expect(mockStart).toHaveBeenCalled();
  });
})

