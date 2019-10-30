function add(param1: number, param2: number): number{
  return param1 + param2;
}

function add2(...param1: number[]): number{
  let total = 0;

  param1.forEach((num) => {
    total += num;
  });

  return total;
}

function multiply(...param1: number[]): number{
  let sum = 1;

  param1.forEach((num) => {
    sum *= num;
  });

  return sum;
}

console.log(multiply(4,5,6));

//console.log(add2(1,2,3,4,5));
//console.log(add2(2,3));