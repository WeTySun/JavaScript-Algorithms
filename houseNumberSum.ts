/* for the given sequence of houses determine the sum that the boy will get. It is guaranteed
that there will always be at least one 0 house on the path.*/
function houseNumbersSum(inputArray: number[]): number {
	let total = 0;
	
	for(let i = 0; i < inputArray.length; i++){
		if(inputArray[i] === 0){
			return total;
		}
		total += inputArray[i];
	}
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));