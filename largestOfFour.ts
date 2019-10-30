/* Return an array consisting of the largest number from each provided sub-array. */
function largestOfFour(nums: number[][]): number[] {
	const highestNumbers: number[] = [];
	
	for(let numberGroup of nums) {
		let largest = 0;
		
		for(let number of numberGroup){
			largest = largest < number ? number : largest;
		}
		
		highestNumbers.push(largest);
	}
	
	return highestNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000,1001, 857, 1]]));