/* Algorithm finds largest number for example: 2 - 99, 3 - 999 */
function largestNumber(n: number): number {
	let word = '9'.repeat(n);
	
	return parseInt(word);
}

console.log(largestNumber(2)); // 99