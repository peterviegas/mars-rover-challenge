import { clear, print, askQuestion } from '../../console/console';
import { movMars } from '../../test/mars-rover-challenge';
import { Coordenation, Position } from '../../interface/Interfaces';
import { getPlateauCoordinates } from '../plateau/plateau';
import { enterOption } from '../menu-options';
import { verifInstructions } from '../../test/mars-rover-challenge';

let nameReceive: string = '';
export function enterSendInstructions(name: string) {
	clear(false);
	print('--------------------------------------------------------------------------------------------------------');
	print(`🚀 Hi ${name}! At this moment the Road is in the base, send the valid instructions in a sequence.... 🚀`);
	print('Remembering that the valid instructions are M for movement, L change the rotation to 90 degrees left     ')
	print('and R change the rotation to 90 degrees right.')
	print('--------------------------------------------------------------------------------------------------------');
	nameReceive = name;
	askQuestion('Enter the sequence and press enter when ready.', enterInstructions);
}

export function enterInstructions(instructions: string): void {
	//Checks if the statement is valid
	let retornVerif = verifInstructions(instructions)

	if (retornVerif){
		//get plateau coordinates
        let coodenation: Coordenation= getPlateauCoordinates();
        let position: Position= {xPosition: 0, yPosition: 0, direction: 'N'};
        let instruction: string = instructions;
        let retornoMov = movMars(position, coodenation, instruction);

		clear(true);
		print('*******************************************************');
	    print('Information about the new positioning of the drone. 🚀');
	    print('*******************************************************');
	    print('Rover XPTO')
	    print(`Coordenate Plateau informad:  ${coodenation.xCoordenation}, ${coodenation.yCoordenation}`);
	    print('Position initial:  0 0 N' );
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