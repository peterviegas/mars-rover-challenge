//Create a constant grid - The first line inputted into the program represents the upper-right coordinates of the Plateau.
import { Coordenation, Position } from './3-Interfaces';
import { moving, directionRight, directionLeft } from './4-rules';

const COORDINATESMAX = [5,5];
//Create a const minimum
const COORDINATEMIN = [0,0];
//Initial position
let positionMars = [0,0,'N'];
let xCoordenation = 0;
let yCoordenation = 0;
let direction = 'N';

//Getting the current position
export function positionCurrentMars(str: string) : boolean {

	if (str===''){
		return false;
	}else{
		positionMars = str.split("");

		//Valid coordinates
		const coordinateValid = ['N','S','W','E'];
		direction = positionMars[2].toString()
		let index = coordinateValid.indexOf(direction);
		xCoordenation = parseInt(positionMars[0].toString());
		yCoordenation = parseInt(positionMars[1].toString());

		//validates the positioning
		return (xCoordenation>=0 && xCoordenation<=5 && yCoordenation>=0 && yCoordenation<=5 && index>-1);
	}
}

//Getting moving
export function movMars(position: Position, coordenation: Coordenation, instruction: string) : string {
console.log('Entrou no moving')
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
	return position.xPosition.toString()+position.yPosition.toString()+position.direction;
}