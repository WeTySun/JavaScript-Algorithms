/* Algorithm checks if a string (first argument, str) ends with the given target string (second
argument, target).*/
function confirmEnding(str: string, target: string) {
	const start = str.length - target.length;
	
	return str.substr(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));