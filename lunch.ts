// For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be stolenLunch(note) = "you'll never guess it: 2390".
function lunch(note: string): string {
	const chars: string[] = note.split('');
	let translateMessage = '';
	const codeDictionary = {
		'0': 'a', '1':'b', '2':'c', '3': 'd', '4':'e',
		'5': 'f', '6':'g', '7':'h', '8':'i', '9':'j',
		'a': '0', 'b':'1','c':'2','d':'3', 'e': '4',
		'f': '5', 'g': '6','h':'7', 'i':'8', 'j':'9'
	};
	
	for(let char of chars){
		translatedMessage += codeDictionary.hasOwnProperty(char) ? codeDictionary[char] : char;
	}
	
	return translatedMessage;
}

console.log(lunch("you'll n4v4r 6u4ss 8t: cdja")); // you'll never guess it: 2390