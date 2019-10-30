/* Given a string, find ou if its characters can be rearranged to form a palindrome. */
function palindromeRearranging(inputString: string): boolean {
	const chars = inputString.split('');
	const charCount = {};
	let oddCount = 0;
	
	for(let char of chars) {
		if(charCount.hasOwnProperty(char)){
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}
	
	for(let key in charCount) {
		if(charCount[key] % 2 !== 0){
			oddCount++;
		}
	}
}

console.log(palindromeRearranging('aabb'));