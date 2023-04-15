import { verifInstructions } from "./mars-rover-challenge";
import { Coordenation} from "../interface/Interfaces";
import { setPlateauCoordinates } from "../menu/plateau/plateau";
import { maxCoordinatePlateau } from "../parameters/parameters"

describe("Test function verifInstructions Valid", () => {
	let coordenation: Coordenation= maxCoordinatePlateau();
	setPlateauCoordinates(coordenation);
  
	it("Valid statement letters (MRL), return must be true", () => {
	  expect(verifInstructions('MRL')).toBe(true);
	});
	it("Valid statement letters (LMLMLMLMM), return must be true", () => {
		expect(verifInstructions('LMLMLMLMM')).toBe(true);
	});
	it("Valid statement letters (MMRMMRMRRM), return must be true", () => {
		expect(verifInstructions('MMRMMRMRRM')).toBe(true);
	});
  });

  describe("Test function verifInstructions Not Valid", () => {
	let coordenation: Coordenation= maxCoordinatePlateau();
	setPlateauCoordinates(coordenation);
  
	it("Not valid statement letters (MARL), return must be true", () => {
	  expect(verifInstructions('MARL')).toBe(false);
	});
	it("Not valid statement letters (LMLMLMLMMF), return must be true", () => {
		expect(verifInstructions('LMLMLMLMMF')).toBe(false);
	});
	it("Not valid statement letters (MMRMMSRMRRM), return must be true", () => {
		expect(verifInstructions('MMRMMSRMRRM')).toBe(false);
	});
	it("Not valid statement letters (ABCDEFGHIJKLMNOPQ), return must be true", () => {
		expect(verifInstructions('ABCDEFGHIJKLMNOPQ')).toBe(false);
	});
	it("Not valid statement letters (1234567890), return must be true", () => {
		expect(verifInstructions('1234567890')).toBe(false);
	});
  });