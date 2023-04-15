import { validatePositionCurrentMars } from "./mars-rover-challenge";
import { movMars } from "./mars-rover-challenge";
import { Coordenation, Position } from "../interface/Interfaces";
import { setPlateauCoordinates } from "../menu/plateau/plateau";
import { maxCoordinatePlateau } from "../parameters/parameters"

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
  let position: Position = {xPosition: 1,	yPosition: 2,	direction: 'N'}
  
  it("should return false is no information in the string", () => {
    expect(validatePositionCurrentMars('')).toBe(false);
  });
  it("should return true the structure is ok and within the limits of the coordinates", () => {
    expect(validatePositionCurrentMars('1 2 N')).toBe(true);
  });
  it("sending the position Rover 1 2 N should return 1 3 N", () => {
    expect(movMars(position, coordenation, 'LMLMLMLMM')).toBe('1 3 N');
  });
  it("should return false overflow at coordinate", () => {
    expect(validatePositionCurrentMars('111 6 N')).toBe(false);
  });
  it("should return true the structure is ok and within the limits of the coordinates", () => {
    expect(validatePositionCurrentMars('3 3 E')).toBe(true);
  });
  //Change value position because async problem
  let positionTest2: Position = {xPosition: 3, yPosition: 3, direction: 'E'}
  it("sending the position Rover 3 3 E should return 5 1 E", () => {
    expect(movMars(positionTest2, coordenation,'MMRMMRMRRM')).toBe('5 1 E');
  });

  //Change value position because async problem
  let positionTest3: Position = {xPosition: 59, yPosition: 41, direction: 'W'}
  it("Sending a different format using a comma should return true..", () => {
    expect(validatePositionCurrentMars('59, 41, W')).toBe(true);
  });
  it("sending the position Rover 59, 41, W should return 58 51 N", () => {
    expect(movMars(positionTest3, coordenation,'MMRMMMMLLMMRMRMMMMRMMLMMMM')).toBe('58 51 N');
  });
});
