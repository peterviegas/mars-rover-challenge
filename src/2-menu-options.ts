import { endExperience } from '.';
import { clear, print, askQuestion } from './console';
import { abortExperience } from './24-return-start';
import { enterTDD } from './20-TDD'
import { enterSendInstructions } from './21-send-instructions';
import { enterSendPoInst } from './22-send-pos-inst';
import { enterSendPosition } from './23-send-local-return-base';

let name:string='';
const options = ['Execute o TDD (Test Drive Developer) ',
			   'Send movement to drone and receive position (starting point for this test is base 0,0)',
			   'Submit position and instructions. You get the actual position', 
			   'Return to base. Send the location and receive instructions to return.', 
			   'Exit tests'] as const;

export function enterOption(nameReceive: string) {
	clear(false);
	print('------------------------');
	print(`๐ Hi ${nameReceive}! ๐`);
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
		print(`๐ฎ`);
		print(`That's not a number ๐ญ`);
		return endExperience();
	}

	if (number < 0 || number > options.length - 1) {
		print(`๐ฎ`);
		print(`${number} is an invalid number ๐ญ`);
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
			print(`WHAAAAT โ๐พ๐พ๐พโ`);
			print(`Something went wrong with the system, contact support for correction! ${options[number]} opรงรฃo!`);
			return endExperience();
	}

}