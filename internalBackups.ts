/* Given a list of changes that were made to the files in your database, where for each valid
i, changes[i][0] is the timestamp of the time the change was made, and changes[i][1] is the
file id. */
function backups(lastBackupTime: number, changes: number[][]): number[] {
	const fileIds: number[] = [];
	
	for(let change of changes) {
		const fileBackuptime = change[0];
		const filedId = change[1];
		
		if(fileBackuptime > lastBackupTime) {
			if(!fileIds.includes(filedId)) {
				fileIds.push(filedId);
			}
		}
	}
	
	return fileIds.sort((fileId1, fileId2) => fileId1 - fileId2);
}

console.log(backups(461620205, [[461620203 , 1],
	[461620204, 2],
	[461620205, 6],
	[461620206, 5],
	[461620207, 3],
	[461620207, 5],
	[461620208, 1]]));