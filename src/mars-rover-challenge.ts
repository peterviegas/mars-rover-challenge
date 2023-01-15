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

	console.log('verificando a String', str)
	if (str===''){
		return false;
	}else{
		//Mount position
		let positionMars = str.split(" ");
	console.log('verificando o array gerado', positionMars)
		
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

		console.log('valor de x: ', position.xPosition)
		console.log('valor de y: ', position.xPosition)

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
}