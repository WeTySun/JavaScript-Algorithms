/* Algorithm replaces all the occurrences of elemToReplace with substitutionElem. */
function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
	inputArray.forEach((element, index) => {
		if(element === elemToReplace){
			inputArray[index] = substitutionElem;
		}
	});
	
	
	return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3)); [ 3, 2, 3 ]