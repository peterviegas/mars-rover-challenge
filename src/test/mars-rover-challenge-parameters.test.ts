import { validatePositionCurrentMars } from "./mars-rover-challenge";
import { Coordenation} from "../interface/Interfaces";
import { setPlateauCoordinates } from "../menu/plateau/plateau";
import { maxCoordinatePlateau } from "../parameters/parameters"


describe("Test function validatePositionCurrentMars positioning parameters", () => {
	let coordenation: Coordenation= maxCoordinatePlateau();
	setPlateauCoordinates(coordenation);
  
	it("Sending string value in place of Y position should return false", () => {
	  expect(validatePositionCurrentMars('1 N N')).toBe(false);
	});
  
	it("Sending string value in place of X position should return false", () => {
	  expect(validatePositionCurrentMars('N 1 N')).toBe(false);
	});
  
	it("Sending character A for the direction, return false, not part of the coordinates.", () => {
	  expect(validatePositionCurrentMars('1 1 A')).toBe(false);
	});
  
	it("Number of parameters different than expected, must return false.", () => {
	  expect(validatePositionCurrentMars('11N')).toBe(false);
	});
  
	it("Number of parameters different than expected, must return false.", () => {
	  expect(validatePositionCurrentMars('1 1 N N')).toBe(false);
	});
  
	it("Sending a different format using a comma should return false..", () => {
	  expect(validatePositionCurrentMars('1,1,N')).toBe(false);
	});
  
	it("Sending a format using a comma should return true..", () => {
	  expect(validatePositionCurrentMars('1, 1, N')).toBe(true);
	});
  });