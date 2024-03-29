function threshold(threshold: number, ratings: number[][]): number[] {
	const review: number[] = [];
	
	for(let i = 0; i < ratings.length; i++)
	{
		let totalRating = 0;
		
		ratings[i].forEach((rating: number) => {
			totalRating += rating;
		});
		
		if(totalRating / ratings[i].length < threshold) {
			review.push(i);
		}
	}
	
	return review;
}

console.log(threshold(3.5, [[3, 4], [3, 3, 3, 4], [4]])); // [ 1 ]