import { endExperience } from '.';
import { clear, print, askQuestion, validIsNumeric } from './console';
import { movMars } from './mars-rover-challenge';
import { Coordenation, Position } from './3-Interfaces';
import { getPlateauCoordinates } from './1-plateau';

export function enterTDD(name: string) {
	clear(false);
	print('----------------------------------------------------------------------------------------------------');
	print(`🚀 Hi ${name}! Now Let's run the TDD developed for the project, please wait for the execution... 🚀`);
	print('----------------------------------------------------------------------------------------------------');
	print('Setting up the parameters for the test');
	enterSettingPDD();

}

export function enterSettingPDD(): void {
	clear(true);

	//Position default initial
	let position: Position= {
		xPosition: 3,
		yPosition: 3,
		direction: 'E'
	};
	
	let instruction: string;
	instruction = 'MMRMMRMRRM'

	//Validation instruction


	//get plateau coordinates
	let coodenation: Coordenation= getPlateauCoordinates();

	movMars(position, coodenation, instruction);
}