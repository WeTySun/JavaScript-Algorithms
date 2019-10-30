/* Sum all the prime numbers up to and including the provided number.*/
function sumAllPrimes(num: number): number {
	let primesTotal = 0;
	
	for(let i = 2; i < num; i++){
		for(let j = 2; j <= i; j++){
			if(i === j){
				primesTotal += i;
			}
			
		if(i % j === 0){
			break;
		}
		}
	}
	
	return primesTotal;
}

console.log(sumAllPrimes(10)); // 17
console.log(sumAllPrimes(977)); // 72179