import { validatePositionCurrentMars } from "./mars-rover-challenge";
import { movMars } from "./mars-rover-challenge";
import { Coordenation, Position } from "../interface/Interfaces";
import { setPlateauCoordinates } from "../menu/plateau/plateau";
import { maxCoordinatePlateau } from "../parameters/parameters"

describe("test validatePositionCurrentMars function and movMars", () => {
	let coordenation: Coordenation= maxCoordinatePlateau();
	setPlateauCoordinates(coordenation);
	let position: Position = {xPosition: 1, yPosition: 2, direction: 'N'};
	it("should return true the structure is ok and within the limits of the coordinates", () => {
	  expect(validatePositionCurrentMars('1 2 N')).toBe(true);
	});
	it("Collision West - Sending the position Rover 1 2 N should return -1 3 W - collision", () => {
	  expect(movMars(position, coordenation, 'LMLMLMLMMLMMM')).toBe('-1 3 W - collision');
	});
	it("should return false overflow at coordinate", () => {
	  expect(validatePositionCurrentMars('111 6 N')).toBe(false);
	});
	//Change value position because async problem
	let positionTest2: Position = {xPosition: 3, yPosition: 3, direction: 'E'}
	it("should return true the structure is ok and within the limits of the coordinates", () => {
	  expect(validatePositionCurrentMars('3 3 E')).toBe(true);
	});
	
	it("Collision South - Sending the position Rover 3 3 E should return 5 -1 S - collision", () => {
	  expect(movMars(positionTest2, coordenation,'MMRMMMMLLMMRMRMMMMRMMLMMMM')).toBe('5 -1 S - collision');
	});
  
	//Change value position because async problem
	let positionTest3: Position = {xPosition: 45, yPosition: 91, direction: 'W'}
	it("Sending a different format using a comma should return true.", () => {
	  expect(validatePositionCurrentMars('45, 91, W')).toBe(true);
	});
	it("Collision North - Sending the position Rover 45, 91, W should return 44 101 N - collision", () => {
	  expect(movMars(positionTest3, coordenation,'MMRMMMMLLMMRMRMMMMRMMLMMMM')).toBe('44 101 N - collision');
	});
	let positionTest4: Position = {xPosition: 95, yPosition: 71, direction: 'W'}
	  it("Sending a different format using a comma should return true.", () => {
		expect(validatePositionCurrentMars('95, 71, W')).toBe(true);
	  });
	  it("Collision East - Sending the position Rover 95, 71, W should return 101 79 E - collision", () => {
		expect(movMars(positionTest4, coordenation,'MMRMMMMLLMMRMRMMMMRMMLMMRMMMMMMM')).toBe('101 79 E - collision');
	  });
  });