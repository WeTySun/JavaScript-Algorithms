// Add two digit number together:
// 34 = 3 + 4 = 7
// 112 = 1 + 1 + 2 = 4 et.c
function addTwoDigits(n: any): number{
  const nums = n.toString().split('');

  return nums.reduce((a: string, b: string)=> {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));