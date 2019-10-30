/* Algorithm find if two cells on the standard chess board have same color or not. */
function cell(white: string, black: string): boolean {
	const board = {
		"A": 1,
		"B" : 2,
		"C" : 3,
		"D" : 4,
		"E" : 5,
		"F" : 6,
		"G" : 7,
		"H" : 8
	};
	
	const total1 = (board[white[0]] + parseInt(white[1])) % 2;
	const total2 = (board[black[0]] + parseInt(black[1])) % 2;
	
	return total1 === total2;
}

console.log(cell('A1', 'C3'));
console.log(cell('A1', 'H3'));