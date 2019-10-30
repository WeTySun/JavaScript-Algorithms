/*Algorithm find the number of different characters in it. */
function differentSymbolsNaive(s: string): number {
	const uniqueChars = new Set();
	const inputChars = s.split('');
	
	inputChars.forEach((chars) => {
		uniqueChars.add(char);
	});
	
	return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));