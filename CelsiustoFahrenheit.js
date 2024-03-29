/*The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5
, plus 32 */
function celsiusToFahrenheit(celsius: number): number {
	return celsius * 9/5 + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));