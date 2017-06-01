var friends = ['Bill','Bob','Jim','Jimmy','Charles'];
for (var i = 0; i< friends.length; i++){
    console.log("\n" + friends[i] + ": ");
    for (var j = 99; j > 1; j--){
        console.log(" " + String(j) + " lines of code in the file "+String(j)+" lines of code;  " + friends[i] + " strikes one out, clears it all out," + String(j-1) + " more lines of code in the file.");
    }
   console.log(" 1 line of code in the file, 1 line of code;  "+ friends[i]+  " strikes one out, clears it all out, no more lines of code in the file.");            
}