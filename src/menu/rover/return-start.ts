import { haveExperience } from '../../index'
import { print, askQuestion} from '../../console/console';

export function abortExperience(): void {
	print('***************************************');
	print('You abandoned the mision, I ll send you to the start menu, see you later!. 👾');
	askQuestion('Press ENTER to restart! ', haveExperience);
}