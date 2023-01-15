import { endExperience } from '.';
import { clear, print, askQuestion, validIsNumeric } from './console';
import { movMars } from './mars-rover-challenge';
import { Coordenation, Position } from './3-Interfaces';
import { getPlateauCoordinates } from './1-plateau';
import { enterOption } from './2-menu-options';

let nameReceive: string = '';
export function enterTDD(name: string) {
	clear(false);
	print('----------------------------------------------------------------------------------------------------');
	print(`🚀 Hi ${name}! Now Let's run the TDD developed for the project, please wait for the execution... 🚀`);
	print('----------------------------------------------------------------------------------------------------');
	print('Setting up the parameters for the test');
	nameReceive = name;
	enterSettingPDD();

}

export function enterSettingPDD(): void {
	clear(true);

	//get plateau coordinates
	let coodenation: Coordenation= getPlateauCoordinates();

	//Position example 1
	let position1: Position= {xPosition: 1, yPosition: 2, direction: 'N'};
	let instruction1: string = 'LMLMLMLMM'
	let retornoMov1 = movMars(position1, coodenation, instruction1);

	//Position example 2
	let position2: Position= {xPosition: 3, yPosition: 3, direction: 'E'};
	let instruction2: string = 'MMRMMRMRRM'
	let retornoMov2 = movMars(position2, coodenation, instruction2);

    print('*****************************************************************');
	print('Two tests of the example set out in the project were carried out. 🚀');
	print('*****************************************************************');
	print('First Rover')
	print(`Coordenate Plateau informad:  ${coodenation.xCoordenation}, ${coodenation.yCoordenation}`);
	print('Position initial:  1 1 N' );
	print(`Intructions:  ${instruction1}`);
	print(`Position end:  ${retornoMov1}`);
	print('*****************************************************************');
	print('Second Rover')
	print(`Coordenate Plateau informad:  ${coodenation.xCoordenation}, ${coodenation.yCoordenation}`);
	print('Position initial:  3 3 E' );
	print(`Intructions:  ${instruction2}`);
	print(`Position end:  ${retornoMov2}`);
	print('********************************************************************************************************************');
	print('Note, for complete execution of TDD it is necessary to exit this application and run npm test from the command line.');
	print('The following test blocks will be executed through this command:');
	print('   - Collision test on North, South, East and West coordinates.');
	print('   - Positioning parameters test.');
	print('   - Driving test receiving Right and Left instructions.');
	print('   - Plateau creation test.');
	print('********************************************************************************************************************');

	askQuestion('Press ENTER to return the menu options! ', endTDD);
}
export function endTDD(): void {
	clear(true);
	return enterOption(nameReceive);
}