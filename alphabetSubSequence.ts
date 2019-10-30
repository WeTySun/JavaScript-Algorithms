// Algorithm which checks if the given string is a subsequence of the plaintext alphabet.
function alphabetSubsequence(s: string): boolean {
    const chars: string[] = s.split('');
    const charValues: number[] = [];

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });
    console.log(new Set(charValues))
    if(new Set(charValues).size !== charValues.length){


        return false;
    }

    for(let i = 0; i < charValues.length; i++){
        if(charValues[i] >= charValues[i + 1]){
            return false;
        }
    }


    return true;
}

console.log(alphabetSubsequence('effg'));