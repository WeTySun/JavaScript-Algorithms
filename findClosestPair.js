/* Array of integers, algorithm finds the closest pair of elements that add up to sum. Return
the distance between the closest pair (absolute difference between the two indices). If there
isn't a pair that adds up to sum, return -1.  */

function closestPair(numbers: number[], sum: number): number {
	let distance = -1;
	
	for(let i = 0; i < numbers.length; i++)
	{
		for(let j = i + 1; j < numbers.length - 1; j++){
			const distanceSum = numbers[i] + numbers[j];
			const absDistance = Math.abs(i - j);
			
			if(sum === distanceSum) {
				if(distance === -1 || absDistance < distance){
					distance = absDistance;
				}
			}
		}
	}
	
	return distance;
}

console.log(closestPair([1, 0, 2, 4, 3, 0], 5));
console.log(closestPair([2, 3, 7], 8));