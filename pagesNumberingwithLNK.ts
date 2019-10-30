/* Algorithm makes print pages for books. */
function lnk(current: number, numberOfDigits: number): number {
	while(numberOfDigits >= current.toString().length){
		numberOfDigits -= current.toString().length;
		
		if(numberOfDigits >= current.toString().length){
			current++;
		}
	}
	
	return current;
}

console.log(lnk(1, 5));
console.log(lnk(21, 5));
console.log(lnk(8, 4));