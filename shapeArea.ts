/* For n = 2, the output should be shapeArea(n) = 5
For n = 3, the output should be shapeArea(n) = 13 */
function shapeArea(n: number): number {
	let area = 1;
	
	for(let i = 1; i < n; i++)
	{
		area += 4 * i;
	}
	
	return area;
}

console.log(shapeArea(2)); // 5
console.log(shapeArea(3)); // 13