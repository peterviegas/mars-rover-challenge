import { endExperience } from '.';
import { clear, print, askQuestion, validIsNumeric } from './console';
import { abortExperience } from './24-return-start';
import { enterTDD } from './25-TDD'

let name:string='';
const options = ['Execute o TDD (Desenvolvedor de sistema de test drive) ',
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

	console.log('Numero recebido: ', number)
	// Directs the test to the requested option
	switch (number) {
		case 0:
			console.log('Option: 0',hole[number]);
			return enterTDD(name);
			break;
		case 1:
			console.log('Option: 1',hole[number]);
			//return SendMov();
			break;
		case 2:
			console.log('Option: 2',hole[number]);
			//return SendPosi();
			break;
		case 3:
			console.log('Option: 3',hole[number]);
			//return SendLocal();
			break;
		case 4:
			console.log('Option: 4',hole[number]);
			return abortExperience();
			break;
		default:
			console.log('Option: erro',hole[number]);
			print(`WHAAAAT ❓👾👾👾❓`);
			print(`Something went wrong with the system, contact support for correction! ${options[number]} opção!`);
			return endExperience();
	}

}