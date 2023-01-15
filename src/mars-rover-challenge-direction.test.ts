import { movMars } from "../src/mars-rover-challenge";
import { Coordenation, Position } from "./3-Interfaces";
import { setPlateauCoordinates } from "./1-plateau";
import { maxCoordinatePlateau } from "./parameters"

describe("Change drone direction left", () => {
	let coordenation: Coordenation= maxCoordinatePlateau();
	setPlateauCoordinates(coordenation);

	let position1: Position = {xPosition: 1,	yPosition: 2,	direction: 'N'}
	it("North direction should go West - Position Rover 1 2 N should return 1 2 W", () => {
	  expect(movMars(position1, coordenation, 'L')).toBe('1 2 W');
	});
	
	let position2: Position = {xPosition: 1,	yPosition: 2,	direction: 'E'}
	it("East direction should go North - Position Rover 1 2 E should return 1 2 N", () => {
	  expect(movMars(position2, coordenation, 'L')).toBe('1 2 N');
	});
  
	let position3: Position = {xPosition: 1,	yPosition: 2,	direction: 'S'}
	it("South direction should go East - Position Rover 1 2 S should return 1 2 E", () => {
	  expect(movMars(position3, coordenation, 'L')).toBe('1 2 E');
	});

	let position4: Position = {xPosition: 1,	yPosition: 2,	direction: 'W'}
	it("West direction should go South - Position Rover 1 2 W should return 1 2 S", () => {
	  expect(movMars(position4, coordenation, 'L')).toBe('1 2 S');
	});
  });

  describe("Change drone direction right", () => {
	let coordenation: Coordenation= maxCoordinatePlateau();
	setPlateauCoordinates(coordenation);

	let position1: Position = {xPosition: 1,	yPosition: 2,	direction: 'N'}
	it("North direction should go East - Position Rover 1 2 N should return 1 2 E", () => {
	  expect(movMars(position1, coordenation, 'R')).toBe('1 2 E');
	});
	
	let position2: Position = {xPosition: 1,	yPosition: 2,	direction: 'E'}
	it("East direction should go South - Position Rover 1 2 E should return 1 2 S", () => {
	  expect(movMars(position2, coordenation, 'R')).toBe('1 2 S');
	});
  
	let position3: Position = {xPosition: 1,	yPosition: 2,	direction: 'S'}
	it("South direction should go West - Position Rover 1 2 S should return 1 2 W", () => {
	  expect(movMars(position3, coordenation, 'R')).toBe('1 2 W');
	});

	let position4: Position = {xPosition: 1,	yPosition: 2,	direction: 'W'}
	it("West direction should go North - Position Rover 1 2 W should return 1 2 N", () => {
	  expect(movMars(position4, coordenation, 'R')).toBe('1 2 N');
	});
  });