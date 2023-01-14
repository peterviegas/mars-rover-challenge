import { endExperience } from '..';
import { haveExperience } from './index'
import { enterOption } from './2-menu-options';
import { clear, print, askQuestion, validIsNumeric } from './console';

export function abortExperience(): void {
	print('***************************************');
	print('You abandoned the mision, I ll send you to the start menu, see you later!. 👾');
	askQuestion('Press ENTER to restart! ', haveExperience);
}