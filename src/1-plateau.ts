import { endExperience } from '..';
import { enterOption } from './2-menu-options';
import { Coordenation } from './3-Interfaces';
import { clear, print, askQuestion } from './console';
import { maxCoordinatePlateau} from './parameters'

let coodenation: Coordenation= {
	xCoordenation:0,
	yCoordenation:0
 };
let name:string='';

export function coordenatePlateau(): void{
	clear(true);

	//Limited for validation
	let  coordinateMax: Coordenation = maxCoordinatePlateau();

	// check the limit
	if (coodenation.xCoordenation > coordinateMax.xCoordenation || coodenation.yCoordenation > coordinateMax.yCoordenation) {
		print(`WHAAAAT ❓👾👾👾👾❓`);
		print(`Remember the boundaries established for testing the Mars Rover ${coordinateMax} Coordenates!`);
		return endExperience();
	} else {
		//Create a constant grid - The first line inputted into the program represents the upper-right coordinates of the Plateau.
		const coordinateMax = [coodenation.xCoordenation, coodenation.yCoordenation];
		
		//Create a const minimum
		const coordinateMin = [0, 0];
		return enterOption(name);
	}
}

export function enterCoordinatePlateau(nameReceive: string) {
	name = nameReceive;
	clear(false);
	print('------------------------');
	print(`🚀 Welcome ${name}! 🚀`);
	print('------------------------');
	print('Now I need the X and Y coordinate numbers (established limit of 100, 100): ');
	askQuestion('Enter the value of the X axis (horizontal)', enterXCoordinate);
	
}

export function enterXCoordinate(coordenate: string): void {
	//  it might seem like we know this is a number, but of course the user can enter any nonsense to the prompt!
	const number = parseInt(coordenate);
	//clear(true);

	if (isNaN(number)) {
		clear(true);
		print(`😮`);
		print(`Invalid informed value for the X coordinate! 😭`);
		return endExperience();
	}else{
		coodenation.xCoordenation = number;
		askQuestion('Enter the value of the Y axis (vertical)', enterYCoordinate);
	}
}

export function enterYCoordinate(coordenate: string): void {
	//  it might seem like we know this is a number, but of course the user can enter any nonsense to the prompt!
	const number = parseInt(coordenate);

	if (isNaN(number)) {
		print(`😮`);
		print(`Invalid informed value for the Y coordinate! 😭`);
		return endExperience();
	}else{
		coodenation.yCoordenation = number;
		coordenatePlateau();
	}
}

export function getPlateauCoordinates (): Coordenation{
	return coodenation;
}

export function setPlateauCoordinates (coordenationReceive: Coordenation): void{
	coodenation = coordenationReceive;
}