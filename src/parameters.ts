import { Coordenation } from "./3-Interfaces";

//parameters default
export function maxCoordinatePlateau(): Coordenation{
    //Limited for validation
	let coordenation: Coordenation= {
		xCoordenation:100,
		yCoordenation:100
	 };
	return coordenation
}

//parameters default
export function minCoordinatePlateau(): Coordenation{
    //Limited for validation
	let coordenation: Coordenation= {
		xCoordenation:0,
		yCoordenation:0
	 };
	return coordenation
}