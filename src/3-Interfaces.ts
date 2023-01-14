//Position of Mars Rover
export interface Position {
	xPosition: number,
	yPosition: number,
	direction: string
}

//Valid coordinates
export const coordinate = ['N','S','W','E'];

export const instructions = ['L', 'R', 'M'];