/* Given a rectangular matrix and an integer column, return an array containing the elements of
the columnth column of the given matrix(the leftmost column is the 0th one).*/
function extractMatrixColumn(matrix: number[][], column: number): number[] {
	const matrixColumn: number[] = [];
	
	matrix.forEach((row) => matrixColumn.push(row[column]));
	
	return matrixColumn;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));