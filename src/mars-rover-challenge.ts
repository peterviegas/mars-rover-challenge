//Create a constant grid - The first line inputted into the program represents the upper-right coordinates of the Plateau.
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
export function movMars(str: string) : string {

	if (str===''){
		return '';
	}else{
		const move = str.split('');
		//check if it is to move
		for(let i=0; i< move.length; i++){
			if(move[i]==='M'){
				switch (direction) {
				case 'N':
					yCoordenation+=1;
					break;
				case 'E':
					xCoordenation+=1;
					break;
				case 'W':
					xCoordenation-=1;
					break;
				case 'S':
					yCoordenation-=1;
					break;
				default:
					break;
				}
				//check change direction right
			}else{
				if(move[i]==='R'){
					switch (direction) {
					case 'N':
						direction='E';
						break;
					case 'E':
						direction='S';
						break;
					case 'W':
						direction='N';
						break;
					case 'S':
						direction='W';
						break;
					default:
						break;
					}
				//check change direction left
				}else{
					if(move[i]==='L'){
						switch (direction) {
							case 'N':
								direction='W';
								break;
							case 'E':
								direction='N';
								break;
							case 'W':
								direction='S';
								break;
							case 'S':
								direction='E';
								break;
							default:
								break;
						}
					}
				}
			}
		}

		//Retorn the new position
		return xCoordenation.toString()+yCoordenation.toString()+direction;
	}
}