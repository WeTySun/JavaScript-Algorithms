/* Given a string, output should be longestDigitsPrefix(inputString) = "123". */
function longestDigitsPrefix(inputString: string): string {
	const chars = inputString.split('');
	let prefix = '';
	
	for(let char of inputString) {
		const num = parseInt(char);
		
		if(isNaN(num)) {
			break;
		}
		
		prefix += char;
	}
	
	return prefix;
}

console.log(longestDigitsPrefix('123aa1')); // 123