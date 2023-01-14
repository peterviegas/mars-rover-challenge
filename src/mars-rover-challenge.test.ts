import { validatePositionCurrentMars } from "../src/mars-rover-challenge";
import { movMars } from "../src/mars-rover-challenge";
import { Coordenation, Position } from "./3-Interfaces";
import { setPlateauCoordinates } from "./1-plateau";
import { maxCoordinatePlateau } from "./parameters"

describe("Test function validatePositionCurrentMars and setPlateauCoordinates", () => {
  let coordenation: Coordenation= maxCoordinatePlateau();
  setPlateauCoordinates(coordenation);

  it("Setting a value equal for the coordinate than the default, return must be true", () => {
    expect(validatePositionCurrentMars('1 2 N')).toBe(true);
  });
});

describe("test validatePositionCurrentMars function and movMars", () => {
  let coordenation: Coordenation= maxCoordinatePlateau();
  setPlateauCoordinates(coordenation);
  let position: Position = {
    xPosition: 1,
		yPosition: 2,
		direction: 'N'
  }
  
  it("should return white is no information in the string", () => {
    expect(validatePositionCurrentMars('')).toBe(false);
  });
  it("should return true", () => {
    expect(validatePositionCurrentMars('1 2 N')).toBe(true);
  });
  it("sending the coordinates", () => {
    expect(movMars(position, coordenation, 'LMLMLMLMM')).toBe('1 3 N');
  });
  it("should return false", () => {
    expect(validatePositionCurrentMars('111 6 N')).toBe(false);
  });
  it("should return true", () => {
    expect(validatePositionCurrentMars('3 3 E')).toBe(true);
  });
  //Change value position
  let positionTest2: Position = {
    xPosition: 3,
		yPosition: 3,
		direction: 'E'
  }
  it("sending the coordinates", () => {
    expect(movMars(positionTest2, coordenation,'MMRMMRMRRM')).toBe('5 1 E');
  });
});
