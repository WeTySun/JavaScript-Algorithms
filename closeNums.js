/* Array of integers nums and an integer k, algorithm determines whether there are two distinct
indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j
is less than or equal to k. */
function closeNums(nums: number[], k: number): boolean {
	for(let i = 0; i < nums.length; i++)
	{
		for(let j = 0; j < nums.length; j++)
		{
			if(i !== j){
				if(Math.abs(i - j) <= k){
					return true;
				}
			}
		}	
	}
	
	return false;
}

console.log(closeNums([0, 1, 2, 3, 5, 2] ,3));