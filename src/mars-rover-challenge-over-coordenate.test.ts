import { validatePositionCurrentMars } from "../src/mars-rover-challenge";
import { movMars } from "../src/mars-rover-challenge";
import { Coordenation } from "./3-Interfaces";
import { setPlateauCoordinates } from "./1-plateau";
import { maxCoordinatePlateau } from "./parameters"

//Plateau creation test
describe("Test function validatePositionCurrentMars and setPlateauCoordinates", () => {
  let coordenation: Coordenation= {
		 xCoordenation:101,
		 yCoordenation:100
	 }; 
   setPlateauCoordinates(coordenation);

  it("Setting a value greater for the coordinate than the default, return must be false", () => {
    expect(validatePositionCurrentMars('1 2 N')).toBe(false);
  });
});



