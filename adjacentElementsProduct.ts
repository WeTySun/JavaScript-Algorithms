//Find largest product and return inputArray
// 3,6,-2,-5,7,3
// 3 * 6 =  18
// 6 * -2 = -12
// -2 * -5 = 10
// -5 * 7 = -35
// 7 * 3 = 21 - biggest

function adjacentElementsProduct(inputArray: number[]): number{
  let largestProduct = inputArray[0] * inputArray[1];

  for(let i = 1; i < inputArray.length - 1; i++){
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = largestProduct < product ? product : largestProduct;
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));