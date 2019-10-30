/* Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure
the confidentiality of the stored information, the device is locked out of Dropbox after 10
consecutive failed passcode attempts. We need to implement a function that given an array
of attempts made throughout the day and the correct passcode checks to see if the device should
be locked, i.e. 10 or more consecutive failed attempts were made. */
function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
	let failedAttempts = 0;
	
	for(let attempt of attempts) {
		failedAttempts = attempt === passcode ? 0 : failedAttempts++;
		
		if(failedAttempts === 10) {
			return true;
		}
	}
	
	return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888",
"2222", "7777", "0000", "6666", "7285", "5555", "1111"])); // false