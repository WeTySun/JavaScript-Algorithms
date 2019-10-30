// Given an array of integers. Each move you are allowed to increase exactly one of its element by one.

function arrayChange(inputArray: number[]): number{
  let count = 0;

  for (let i = 0; i < inputArray.length; i++){
    if(inputArray[i] >= inputArray[i + 1]){
      const difference = (inputArray[i] + 1) - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }

  return count;
}

console.log(arrayChange([1,1,1]));