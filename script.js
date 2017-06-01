var friends = ['Bill','Bob','Jim','Jimmy','Charles'];
for (var i = 0; i< friends.length; i++){
    console.log("\n" + friends[i].toUpperCase() + ": ");
    for (var j = 99; j > 0; j--){
        if(j>2){
            console.log(" " + j + " lines of code in the file "+j+" lines of code, " + friends[i] + " strikes one out, clears it all out," + (j-1) + " more lines of code in the file.");
        }else if(j === 2){
            console.log(" " + j + " lines of code in the file " + j + " lines of code, " + friends[i] + " strikes one out, clears it all out," + (j-1) + " more line of code in the file.");
        }else{
           console.log(" " + j +  " line of code in the file, " + j + " line of code,  "+ friends[i]+  " strikes one out, clears it all out, no more lines of code in the file.");           
        }
    }
}