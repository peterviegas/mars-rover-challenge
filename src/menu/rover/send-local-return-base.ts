import { clear, print, askQuestion } from '../../console/console';
import { movMars } from '../../test/mars-rover-challenge';
import { Coordenation, Position } from '../../interface/Interfaces';
import { getPlateauCoordinates } from '../plateau/plateau';
import { enterOption } from '../menu-options';
import { validatePositionCurrentMars } from '../../test/mars-rover-challenge';

let nameReceive: string = '';
export function enterSendPosition(name: string) {
	clear(false);
	print('--------------------------------------------------------------------------------------------------------');
	print(`🚀 Hi ${name}! Inform your current position to receive an option to return to base..... 🚀`);
	print('For positioning, it must be sent in text format, separated by white space, example 1 2 N')
	print('The X axis will receive the value 1, the Y axis will receive the value 2 and the direction will be North')
	print('--------------------------------------------------------------------------------------------------------');
	nameReceive = name;
	askQuestion('Enter the position and press enter when ready.', enterPosition);
}

export function enterPosition(positionReceive: string): void {
	//Checks if the statement is valid
	let retornVerif = validatePositionCurrentMars(positionReceive)

	if (retornVerif){
		//get plateau coordinates
        let coodenation: Coordenation= getPlateauCoordinates();

        let postionAux = positionReceive.split(' ');
		let position: Position = {
			xPosition: parseInt(postionAux[0].toString()),
			yPosition: parseInt(postionAux[1].toString()),
			direction: postionAux[2].toString()
		}

        let instruction: string = "";

		while(position.xPosition!==0 || position.yPosition!==0){
            switch (position.direction) {
				case 'N':
					position.direction='W';
					instruction+='L';
					break;
				case 'E':
					position.direction='S';
					instruction+='R';
					break;
				case 'W':
					if (position.xPosition === 0){
					    position.direction='S';
						instruction+='L';
					}else{
						position.xPosition-=1;
						instruction+='M';
					}
					break;
				case 'S':
					if (position.yPosition === 0){
					position.direction='W';
						instruction+='R';
					}else{
					position.yPosition-=1;
						instruction+='M';
					}
					break;
				default:
					break;
			}
		}

		let positionEnd = position.xPosition.toString()+' '+position.yPosition.toString()+' '+position.direction;
		
        let retornoMov = movMars(position, coodenation, instruction);

		//clear(true);
		print('***********************************************************************');
	    print('Generating one of the possible instructions for returning the drone. 🚀');
	    print('************************************************************************');
	    print('Rover XPTO')
	    print(`Coordenate Plateau informad:  ${coodenation.xCoordenation}, ${coodenation.yCoordenation}`);
	    print(`Position initial:  ${positionReceive}` );
	    print(`Intructions:  ${instruction}`);
	    print(`Position end:  ${positionEnd}`);
	    print('************************************************************************');
		askQuestion('Press ENTER to return the menu options! ', endPosition);

	}else{
		clear(true);
		print(`😮`);
		print(`Invalid position! 😭`);
		askQuestion('Press ENTER to return the menu options! ', endPosition);
	}
}
export function endPosition(): void {
	clear(true);
	return enterOption(nameReceive);
}