/* Array a that contains only numbers in the range from 1 to a.length, find the first duplicate number
for which the second occurrence has the minimal index. In other word, if there are more than 1
duplicated numbers, return the number fow which the second occurrence has a similar index than
the second occurrence of the other number does. If there are no such elements, return -1. */
function firstDuplicate(a: number[]): number {
	const firstDup = {};
	
	for(let num of a){
		if (firstDup.hasOwnProperty(num)){
			return num;
		}
		
		firstDup[num] = num;
	}
	
	return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));