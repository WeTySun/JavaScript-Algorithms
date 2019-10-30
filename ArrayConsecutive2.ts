/* Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each
statue having an non-negative integer size.*/
function consecutive2(statues: number[]): number {
	let count = 0;
	const sortedStatues = statues.sort((a, b) => a - b);
	const min = sortedStatues[0];
	const max = sortedStatues[sortedStatues.length - 1];
	
	for(let i = min; i < max; i++)
	{
		if(!statues.includes(i))
		{
			count++;
		}
	}
	return count;
}

console.log(consecutive2([6, 2, 3, 8])); // 123