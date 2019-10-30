/* algorithm finds largest integer N divisible by divisor, N is less than or equal to bond
N is greater than 0. */
function maxMultiple(divisor: number, bound: number): number {
	let remainder = bound % divisor;
	
	return bound - remainder;
}

console.log(maxMultiple(3, 10)); // 9