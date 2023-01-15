import { clear, print, askQuestion } from './console';
import { movMars } from './mars-rover-challenge';
import { Coordenation, Position } from './3-Interfaces';
import { getPlateauCoordinates } from './1-plateau';
import { enterOption } from './2-menu-options';
import { verifInstructions , validatePositionCurrentMars} from './mars-rover-challenge';

let nameReceive: string = '';
let positionInitial = '';


export function enterSendPoInst(name: string) {
	//clear(false);
	print('--------------------------------------------------------------------------------------------------------');
	print(`🚀 Hi ${name}! Send the current position of the drone and the valid instructions in a sequence.... 🚀`);
	print('For positioning, it must be sent in text format, separated by white space, example 1 2 N');
	print('The X axis will receive the value 1, the Y axis will receive the value 2 and the direction will be North')
	print('Remembering that the valid instructions are M for movement, L change the rotation to 90 degrees left     ')
	print('and R change the rotation to 90 degrees right.')
	print('--------------------------------------------------------------------------------------------------------');
	nameReceive = name;
	askQuestion('Enter the sequence and press enter when ready.', enterPosition);
}

export function enterPosition(positionReceive: string): void {
	//Checks if the position is valid
	let retornVerif = validatePositionCurrentMars(positionReceive);

	if (retornVerif){
		positionInitial = positionReceive;
        askQuestion('Enter the sequence and press enter when ready.', enterInstructions);

	}else{
		clear(true);
		print(`😮`);
		print(`Invalid positition! 😭`);
		askQuestion('Press ENTER to return the menu options! ', endInstructions);
	}
}

export function enterInstructions(instructions: string): void {
	//Checks if the statement is valid
	let retornVerif = verifInstructions(instructions)

	if (retornVerif){
		//get plateau coordinates
        let coodenation: Coordenation= getPlateauCoordinates();
		let postionAux = positionInitial.split(' ');
		let position: Position = {
			xPosition: parseInt(postionAux[0].toString()),
			yPosition: parseInt(postionAux[1].toString()),
			direction: postionAux[2].toString()
		}
        let instruction: string = instructions;

        let retornoMov = movMars(position, coodenation, instruction);

		//clear(true);
		print('*******************************************************');
	    print('Information about the new positioning of the drone. 🚀');
	    print('*******************************************************');
	    print('Rover XPTO')
	    print(`Coordenate Plateau informad:  ${coodenation.xCoordenation}, ${coodenation.yCoordenation}`);
	    print(`Position initial:  ${positionInitial}` );
	    print(`Intructions:  ${instruction}`);
	    print(`Position end:  ${retornoMov}`);
	    print('*****************************************************************');
		askQuestion('Press ENTER to return the menu options! ', endInstructions);

	}else{
		clear(true);
		print(`😮`);
		print(`Invalid instruction! 😭`);
		askQuestion('Press ENTER to return the menu options! ', endInstructions);
	}
}
export function endInstructions(): void {
	clear(true);
	return enterOption(nameReceive);
}