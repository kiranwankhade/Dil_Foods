import { generateRandomColor, generateRandomColorArray } from '../CommonFunctions/ColorRandom';

describe('generateRandomColor', () => {
  test('generates a valid rgb color string', () => {
    const colorPattern = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
    expect(generateRandomColor()).toMatch(colorPattern);
  });
});

describe('generateRandomColorArray', () => {
  test('generates an array of 12 random colors', () => {
    const colors = generateRandomColorArray();
    expect(colors).toHaveLength(12);
    colors.forEach(color => {
      expect(color).toMatch(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/);
    });
  });
});
