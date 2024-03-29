//Create a constant grid - The first line inputted into the program represents the upper-right coordinates of the Plateau.
import { Coordenation, Position } from '../interface/Interfaces';
import { moving, directionRight, directionLeft } from '../rules/rules';
import { getPlateauCoordinates } from '../menu/plateau/plateau'
import { maxCoordinatePlateau, minCoordinatePlateau } from '../parameters/parameters'

//Getting the current position
export function validatePositionCurrentMars(str: string) : boolean {
	//get maximum coordenate Plateau
	let coordenationMax: Coordenation = maxCoordinatePlateau();

	//get min coordenate Plateau
	let coordenationMin: Coordenation = minCoordinatePlateau();

	//get Plateau coordinates
	let coordenation: Coordenation= getPlateauCoordinates();
	if(coordenation.xCoordenation>coordenationMax.xCoordenation ||
		coordenation.yCoordenation>coordenationMax.yCoordenation) return false;

	if (str===''){
		return false;
	}else{
		//Mount position
		let positionMars = str.split(" ");
		
		if(positionMars.length!==3) return false;

		if (isNaN(parseInt(positionMars[0].toString())) ||
		    isNaN(parseInt(positionMars[1].toString()))) {
		    return false;
		}	

		let position: Position= {
			xPosition:parseInt(positionMars[0].toString()),
			yPosition: parseInt(positionMars[1].toString()),
			direction: positionMars[2].toString()
		};

		//Valid coordinates
		const coordinateValid = ['N','S','W','E'];
		let index = coordinateValid.indexOf(position.direction);

		//validates the positioning
		return (position.xPosition>=coordenationMin.xCoordenation &&
			position.xPosition<=coordenation.xCoordenation &&
			position.yPosition>=coordenationMin.yCoordenation &&
			position.yPosition<=coordenation.yCoordenation &&
			    index>-1);
	}
}

//Getting moving
export function movMars(position: Position, coordenation: Coordenation, instruction: string) : string {
	//get min coordenate Plateau
	let coordenationMin: Coordenation = minCoordinatePlateau();
	let collision = false;

	let returnValidadeInstructions = verifInstructions(instruction);

	if (returnValidadeInstructions){
		for(let i=0; i< instruction.length; i++){

			if(instruction[i]==='M'){
				position=moving(position);
			//check change direction right
			}else{
				if(instruction[i]==='R'){
					position=directionRight(position);
				}else{
					position=directionLeft(position);
				}
			}
			if(position.xPosition<coordenationMin.xCoordenation ||
				position.xPosition>coordenation.xCoordenation ||
				position.yPosition<coordenationMin.yCoordenation ||
				position.yPosition>coordenation.yCoordenation){
					collision = true;
					break;
				} 
		}
		//Retorn the new position
		return collision === true? 
			position.xPosition.toString()+' '+position.yPosition.toString()+' '+position.direction + ' - collision':
			position.xPosition.toString()+' '+position.yPosition.toString()+' '+position.direction;
	}else{
        return 'Invalidates past instructions'
	}

}
export function verifInstructions(instruction: string) : boolean {
    let itemInstuction= instruction.split('');

	for(let i=0; i<itemInstuction.length;i++){
		if(itemInstuction[i]!=='M'&& itemInstuction[i]!=='R'&& itemInstuction[i]!=='L'){
			return false;
		}
	}
	return true;
}