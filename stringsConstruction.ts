/* For a = "abc" and b = "abccba", the output should be stringsConstruction(a, b) = 2. */
function stringsConstruction(a: string, b: string): number {
	const aCount = getAlphabetCount(a);
	const bCount = getAlphabetCount(b);
	const counts = [];
	
	for(let char in aCount){
		if(bCount.hasOwnProperty(char)){
			counts.push(Math.floor(bCount[char] / aCount[char]));
		} else {
			return 0;
		}
	}
	
	return Math.min(...counts);
}

function getAlphabetCount(word: string): object {
	const chars = word.split('');
	const alphabetCount = {};
	
	chars.forEach((char) => {
		if(alphabetCount.hasOwnProperty(char)) {
			alphabetCount[char]++;
		} else {
			alphabetCount[char] = 1;
		}
	});
	
	return alphabetCount;
}

console.log(stringsConstruction('abc', 'abccba'));