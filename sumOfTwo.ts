// For a = [1,2,3], b = [10, 20, 30, 40], and v = 42, the output should be sumOfTwo(a,b,v) = true.
function sumOfTwo(a: number[], b: number[], v: number): boolean {
	const hashMap = {};
	
	for(let num of a){
		const difference = v - num;
		hashMap[difference] = difference;
	}
	
	for(let num of b) {
		if(hashMap.hasOwnProperty(num)){
			return true;
		}
	}
	
	return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42)); // true