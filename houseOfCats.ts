/*  Algorithm founds how many people in house if cats all in house and people have two legs
and cats four.*/
function houseOfCats(legs: number): number[] {
	const peopleCount: number[] = [];
	
	if(legs === 2) {
		return[1];
	}
	
	while(legs >= 0) {
		peopleCount.unshift()
		legs -= 4;
	}
	
	return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));