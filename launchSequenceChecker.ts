/* The master launch sequence consists of several independent sequences for different systems.
Algorithm goal is to verify that all the individual system sequences are in strictly increasing
order. */
function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
	const launchCodes = {};
	
	for(let i = 0; i < systemNames.length; i++){
		if(launchCodes.hasOwnProperty(systemNames[i])) {
			if(launchCodes[systemNames[i]] >= stepNumbers[i]){
				return false;
			}
			launchCodes[systemNames[i]] = stepNumbers[i];
		} else {
			launchCodes[systemNames[i]] = stepNumbers[i];
		}
	}
	
	return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
[1, 10, 11, 2, 12, 111]));