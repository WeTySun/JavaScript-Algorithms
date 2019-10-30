function noRepeat(str){
	var arr = str.split('');
	var obj = {};
	var answer = false;
	var minIndex = arr.length;
	
	arr.forEach((letter, index) => {
		if(!obj[letter]){
			obj[letter] = [index, true]
		}
		else if(obj[letter]){
			obj[letter] = false;
		}
	})
	for(var key in obj){
		if(obj[key]){
			if(obj[key][0] < minIndex){
				answer = key;
				minIndex = obj[key][0]
			}
		}
	}
	return answer;
}