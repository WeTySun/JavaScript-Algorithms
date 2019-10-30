/* Integer numbers from 0 to n - 1 written down along the circle in such a way that the distance
between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too). */
function circleOfNumbers(n: number, firstNumber: number): number {
	const numArray = [];
	const halfWay = n / 2;
	
	for(let i = 0; i < n; i++)
	{
		numArray.push(i);
	}
	
	if(firstNumber < halfWay){
		return numArray[firstNumber + halfWay]
	}
	
	return numArray[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2));