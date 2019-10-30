/* Algorithm compare two integers given as strings. */
function compare(a: string, b: string): string {
	return parseInt(a) > parseInt(b) ? 'greater' : parseInt(a) < parseInt(b) ? 'less' : 'equal';
}

console.log(compare('12', '13'));

