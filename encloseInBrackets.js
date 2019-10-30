/* Given a string, enclose it in round brackets. */
function encloseInBrackets(inputString: string): string {
	return '(${inputString})';
}

console.log(encloseInBrackets('abacaba'));