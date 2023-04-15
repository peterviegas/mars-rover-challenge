import { clear, print, askQuestion } from './console/console';
import { enterCoordinatePlateau } from './menu/plateau/plateau';

export function haveExperience(): void {
	clear(false);
	print('----------------------------------------------');
	print('🚀 Welcome to the Mars Rover test program! 🚀');
	print('----------------------------------------------');
	askQuestion(`What's your name? `, startExperience);
}

function failImmediately(): void {
	clear(false);
	return endExperience();
}

 function startExperience(name: string): void {
	if (name.length > 0) {
		return enterCoordinatePlateau(name);
	} else {
		print(`I don't know who you are!`);
		return endExperience();
	}
}

export function endExperience(): void {
	print('***************************************');
	print('You will not be able to perform the tests in the program. 👾');
	askQuestion('Press ENTER to restart! ', haveExperience);
}

haveExperience();
