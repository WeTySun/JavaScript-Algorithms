/* Given a valid email address, algorithm finds its domain part. */
function email(address: string): string {
	const lastAtIndex = address. lastIndexOf('@');
	
	return address.slice(lastAtIndex + 1, address.length);
}

console.log(email('make@example.com')) // example.com