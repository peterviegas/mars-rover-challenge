import { endExperience } from '..';
import { clear, print, askQuestion } from '../console/console';
import { abortExperience } from './rover/return-start';
import { enterTDD } from './TDD/TDD'
import { enterSendInstructions } from './rover/send-instructions';
import { enterSendPoInst } from './rover/send-pos-inst';
import { enterSendPosition } from './rover/send-local-return-base';

let name:string='';
const options = ['Execute o TDD (Test Drive Developer) ',
			   'Send movement to drone and receive position (starting point for this test is base 0,0)',
			   'Submit position and instructions. You get the actual position', 
			   'Return to base. Send the location and receive instructions to return.', 
			   'Exit tests'] as const;

export function enterOption(nameReceive: string) {
	clear(false);
	print('------------------------');
	print(`🚀 Hi ${nameReceive}! 🚀`);
	print('------------------------');
	print('Choose the option for your test: ');
	options.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which number hole will you choose?', enterHole);
	name = nameReceive;
}

export function enterHole(hole: string): void {
	clear(true);

	//  it might seem like we know this is a number, but of course the user can enter any nonsense to the prompt!
	const number = parseInt(hole);

	if (isNaN(number)) {
		print(`😮`);
		print(`That's not a number 😭`);
		return endExperience();
	}

	if (number < 0 || number > options.length - 1) {
		print(`😮`);
		print(`${number} is an invalid number 😭`);
		return endExperience();
	}

	// Directs the test to the requested option
	switch (number) {
		case 0:
			return enterTDD(name);
			break;
		case 1:
			return enterSendInstructions(name);
			break;
		case 2:
			return enterSendPoInst(name);
			break;
		case 3:
			return enterSendPosition(name);
			break;
		case 4:
			return abortExperience();
			break;
		default:
			print(`WHAAAAT ❓👾👾👾❓`);
			print(`Something went wrong with the system, contact support for correction! ${options[number]} opção!`);
			return endExperience();
	}

}