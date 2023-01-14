//Create a constant grid - The first line inputted into the program represents the upper-right coordinates of the Plateau.
import { Coordenation, Position } from './3-Interfaces';
import { moving, directionRight, directionLeft } from './4-rules';
import { getPlateauCoordinates } from './1-plateau'
import { maxCoordinatePlateau, minCoordinatePlateau } from './parameters'

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
		
		if (isNaN(parseInt(positionMars[0].toString())) ||
		    isNaN(parseInt(positionMars[1].toString())) ||
			positionMars.length!==3) {
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
    }

	//Retorn the new position
	return position.xPosition.toString()+' '+position.yPosition.toString()+' '+position.direction;
}