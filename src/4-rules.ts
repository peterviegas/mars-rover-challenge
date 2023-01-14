import { Position } from './3-Interfaces';
//Direction Left
export function directionLeft(direction:string):string{
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
	return direction;
}

//Direction Right
export function directionRight(direction:string):string{
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
	return direction;
}

//Moving
export function moving(position: Position):Position{
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
		return position;
}