import { validatePositionCurrentMars } from "./mars-rover-challenge";
import { Coordenation } from "../interface/Interfaces";
import { setPlateauCoordinates } from "../menu/plateau/plateau";

//Plateau creation test
describe("Test function validatePositionCurrentMars and setPlateauCoordinates", () => {
  let coordenation: Coordenation= {xCoordenation:101, yCoordenation:100}; 
   setPlateauCoordinates(coordenation);

  it("Setting a value greater for the coordinate than the default, return must be false", () => {
    expect(validatePositionCurrentMars('1 2 N')).toBe(false);
  });
});


