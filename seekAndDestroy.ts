/* Initial array, algorithm removes all elements from the initial array that are of the same
value as these arguments.*/
function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
	return arr1.filter((element) => !arr2.includes(element));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5])); // [ 1 ]
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3])); // [ 1, 5, 1 ]