import { positionCurrentMars } from "../src/mars-rover-challenge";
import { movMars } from "../src/mars-rover-challenge";

describe("test add function", () => {
  it("should return white is no information in the string", () => {
    expect(positionCurrentMars('')).toBe(false);
  });
  it("should return true", () => {
    expect(positionCurrentMars('12N')).toBe(true);
  });
  it("sending the coordinates", () => {
    expect(movMars('LMLMLMLMM')).toBe('13N');
  });
  it("should return false", () => {
    expect(positionCurrentMars('16N')).toBe(false);
  });
  it("should return true", () => {
    expect(positionCurrentMars('33E')).toBe(true);
  });
  it("sending the coordinates", () => {
    expect(movMars('MMRMMRMRRM')).toBe('51E');
  });
});
