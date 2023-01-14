import { Position } from './3-Interfaces';
//Direction Left
export function directionLeft(position:Position):Position{
	switch (position.direction) {
		case 'N':
			position.direction='W';
			break;
		case 'E':
			position.direction='N';
			break;
		case 'W':
			position.direction='S';
			break;
		case 'S':
			position.direction='E';
			break;
		default:
			break;
	}
	return position;
}

//Direction Right
export function directionRight(position:Position):Position{
	switch (position.direction) {
		case 'N':
			position.direction='E';
			break;
		case 'E':
			position.direction='S';
			break;
		case 'W':
			position.direction='N';
			break;
		case 'S':
			position.direction='W';
			break;
		default:
			break;
		}
	return position;
}

//Moving
export function moving(position: Position):Position{
	console.log('valor enviado rules', position)
	switch (position.direction) {
		case 'N':
			position.yPosition+=1;
			break;
		case 'E':
			position.xPosition+=1;
			break;
		case 'W':
			position.xPosition-=1;
			break;
		case 'S':
			position.yPosition-=1;
			break;
		default:
			break;
	}
	console.log('valor retornado rules', position)
		return position;
}